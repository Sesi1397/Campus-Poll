// Shared helpers for the voting and presenter pages.
(function () {
  const CFG = window.POLL_CONFIG;

  function configured() {
    return /^https:\/\/script\.google(usercontent)?\.com\//.test(CFG.BACKEND_URL || '');
  }

  // GET request to the Apps Script web app; retries with backoff.
  async function call(params, tries) {
    tries = tries || 3;
    const qs = new URLSearchParams(Object.assign({}, params, { t: Date.now().toString(36) }));
    let lastErr;
    for (let i = 0; i < tries; i++) {
      try {
        const res = await fetch(CFG.BACKEND_URL + '?' + qs.toString(), { method: 'GET', cache: 'no-store', redirect: 'follow' });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();
        if (!data.ok) throw new Error(data.error || 'Server error');
        return data;
      } catch (e) {
        lastErr = e;
        await new Promise((r) => setTimeout(r, 600 * Math.pow(2, i) + Math.random() * 400));
      }
    }
    throw lastErr;
  }

  function scenario(id) { return CFG.SCENARIOS.find((s) => s.id === id) || null; }
  function indexOf(id) { return CFG.SCENARIOS.findIndex((s) => s.id === id); }

  // counts: array of 5 frequencies for ratings 1..5
  function stats(counts) {
    const c = counts || [0, 0, 0, 0, 0];
    const n = c.reduce((a, b) => a + b, 0);
    if (!n) return { n: 0, median: null, mean: null, unsafe: null };
    let cum = 0, lo = null, hi = null;
    const loPos = Math.ceil(n / 2), hiPos = Math.floor(n / 2) + 1;
    for (let k = 0; k < 5; k++) {
      cum += c[k];
      if (lo === null && cum >= loPos) lo = k + 1;
      if (hi === null && cum >= hiPos) hi = k + 1;
    }
    const median = n % 2 ? lo : (lo + hi) / 2;
    const mean = c.reduce((a, v, k) => a + v * (k + 1), 0) / n;
    return { n, median, mean, unsafe: (c[0] + c[1]) / n };
  }

  function el(tag, attrs, children) {
    const e = document.createElement(tag);
    Object.entries(attrs || {}).forEach(([k, v]) => {
      if (k === 'class') e.className = v;
      else if (k === 'text') e.textContent = v;
      else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v);
    });
    (children || []).forEach((ch) => e.appendChild(typeof ch === 'string' ? document.createTextNode(ch) : ch));
    return e;
  }

  window.Poll = { CFG, configured, call, scenario, indexOf, stats, el };
})();
