/**
 * Backend for the campus perceived-safety poll.
 * Paste this into Extensions > Apps Script of a new Google Sheet,
 * then Deploy > New deployment > Web app (Execute as: Me; Who has access: Anyone).
 * Votes are written to the sheet tab "votes", one row per rating.
 */
const SHEET_NAME = 'votes';
const HEADERS = ['timestamp', 'respondent', 'item', 'rating', 'gender', 'role', 'mode'];
const ITEM_RE = /^S\d{2}(-[DN])?$/;
const RID_RE = /^[A-Za-z0-9-]{8,64}$/;

function doGet(e) {
  const p = (e && e.parameter) || {};
  let res;
  try {
    if (p.action === 'vote') res = vote_(p);
    else if (p.action === 'results') res = results_();
    else res = { ok: true, service: 'campus-poll' };
  } catch (err) {
    res = { ok: false, error: String((err && err.message) || err) };
  }
  return ContentService.createTextOutput(JSON.stringify(res)).setMimeType(ContentService.MimeType.JSON);
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(HEADERS);
    sh.setFrozenRows(1);
  }
  return sh;
}

// Plain text only; a leading = + - @ is escaped so a cell is never read as a formula.
function text_(v, max) {
  let s = String(v == null ? '' : v).replace(/[\r\n\t]+/g, ' ').trim().slice(0, max);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function vote_(p) {
  const rid = String(p.rid || '');
  if (!RID_RE.test(rid)) return { ok: false, error: 'bad respondent id' };
  const pairs = String(p.items || '').split(',').filter(function (x) { return x; });
  if (pairs.length < 1 || pairs.length > 4) return { ok: false, error: 'no items' };
  const now = new Date();
  const rows = [];
  for (let i = 0; i < pairs.length; i++) {
    const parts = pairs[i].split(':');
    const item = parts[0];
    const r = Number(parts[1]);
    if (!ITEM_RE.test(item) || !Number.isInteger(r) || r < 1 || r > 5) return { ok: false, error: 'bad item ' + pairs[i] };
    rows.push([now, rid, item, r, text_(p.g, 40), text_(p.r, 60), text_(p.m, 40)]);
  }
  const sh = getSheet_();
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(15000)) return { ok: false, error: 'busy, retry' };
  try {
    sh.getRange(sh.getLastRow() + 1, 1, rows.length, HEADERS.length).setValues(rows);
    SpreadsheetApp.flush();
  } finally {
    lock.releaseLock();
  }
  return { ok: true, saved: rows.length };
}

// Counts per item, using each respondent's latest rating for that item. Cached for 3 s.
function results_() {
  const cache = CacheService.getScriptCache();
  const hit = cache.get('results');
  if (hit) return JSON.parse(hit);
  const sh = getSheet_();
  const last = sh.getLastRow();
  const latest = {};
  if (last > 1) {
    const vals = sh.getRange(2, 2, last - 1, 3).getValues(); // respondent, item, rating
    for (let i = 0; i < vals.length; i++) latest[vals[i][0] + '|' + vals[i][1]] = Number(vals[i][2]);
  }
  const items = {};
  const people = {};
  Object.keys(latest).forEach(function (k) {
    const cut = k.lastIndexOf('|');
    const rid = k.slice(0, cut), item = k.slice(cut + 1), r = latest[k];
    if (!items[item]) items[item] = [0, 0, 0, 0, 0];
    if (r >= 1 && r <= 5) items[item][r - 1]++;
    people[rid] = 1;
  });
  const res = { ok: true, updated: new Date().toISOString(), respondents: Object.keys(people).length, items: items };
  cache.put('results', JSON.stringify(res), 3);
  return res;
}
