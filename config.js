// Edit BACKEND_URL after deploying the Apps Script (see README.md).
window.POLL_CONFIG = {
  "BACKEND_URL": "https://script.google.com/macros/s/AKfycbyrIyAngB-4F8eSSrZqXNl7_yn517FsYPHi-bcWa3Kyqnm3ZfXUGdb0T-__XQexLzUs/exec",
  "TITLE": "Perceived Safety on Campus Roads",
  "SESSION": "Campus Road Safety Awareness Session · IIT Kharagpur · 12 October 2026",
  "SCALE": [
    "Very unsafe",
    "Unsafe",
    "Neither safe nor unsafe",
    "Safe",
    "Very safe"
  ],
  "PROFILE": [
    {
      "key": "g",
      "label": "P1. Gender",
      "options": [
        "Female",
        "Male",
        "Another gender",
        "Prefer not to say"
      ]
    },
    {
      "key": "r",
      "label": "P2. Role on campus",
      "options": [
        "Undergraduate student",
        "Postgraduate student",
        "Research scholar",
        "Faculty",
        "Staff",
        "Campus resident",
        "Visitor or external expert"
      ]
    },
    {
      "key": "m",
      "label": "P3. Usual way of travelling on campus",
      "options": [
        "Walk",
        "Bicycle",
        "Motorised two-wheeler",
        "Car",
        "E-rickshaw or bus"
      ]
    }
  ],
  "SCENARIOS": [
    {
      "id": "S01",
      "title": "Crossing point at a footpath entry",
      "question": "How safe would you feel crossing the road here on foot?",
      "perspective": "Crossing on foot",
      "photos": [
        {
          "src": "img/P02.jpg",
          "caption": "(a) Daylight"
        },
        {
          "src": "img/P08.jpg",
          "caption": "(b) After dark"
        }
      ],
      "items": [
        {
          "code": "S01-D",
          "label": "Panel (a), daylight"
        },
        {
          "code": "S01-N",
          "label": "Panel (b), after dark"
        }
      ]
    },
    {
      "id": "S02",
      "title": "Zebra crossings",
      "question": "How safe would you feel crossing the road on foot at each of these crossings?",
      "perspective": "Crossing on foot",
      "photos": [
        {
          "src": "img/P20.jpg",
          "caption": "(a) Location 1, daylight"
        },
        {
          "src": "img/P11.jpg",
          "caption": "(b) Location 2, after dark"
        }
      ],
      "items": [
        {
          "code": "S02-D",
          "label": "Panel (a), location 1, daylight"
        },
        {
          "code": "S02-N",
          "label": "Panel (b), location 2, after dark"
        }
      ]
    },
    {
      "id": "S03",
      "title": "Signed cycle and pedestrian crossing at a separator",
      "question": "How safe would you feel crossing here by bicycle?",
      "perspective": "Crossing by bicycle",
      "photos": [
        {
          "src": "img/P05.jpg",
          "caption": "Daylight"
        }
      ],
      "items": [
        {
          "code": "S03",
          "label": "Your rating"
        }
      ]
    },
    {
      "id": "S04",
      "title": "Roundabout with a landscaped central island",
      "question": "How safe would you feel cycling through this roundabout?",
      "perspective": "Cycling",
      "photos": [
        {
          "src": "img/P19.jpg",
          "caption": "Daylight"
        }
      ],
      "items": [
        {
          "code": "S04",
          "label": "Your rating"
        }
      ]
    },
    {
      "id": "S05",
      "title": "Footway beside a tree-lined road",
      "question": "How safe would you feel walking along this footway?",
      "perspective": "Walking",
      "photos": [
        {
          "src": "img/P28.jpg",
          "caption": "(a) Daylight"
        },
        {
          "src": "img/P46.jpg",
          "caption": "(b) After dark"
        }
      ],
      "items": [
        {
          "code": "S05-D",
          "label": "Panel (a), daylight"
        },
        {
          "code": "S05-N",
          "label": "Panel (b), after dark"
        }
      ]
    },
    {
      "id": "S06",
      "title": "Trees within the walking width of footways",
      "question": "How safe would you feel walking along each of these footways?",
      "perspective": "Walking",
      "photos": [
        {
          "src": "img/P39.jpg",
          "caption": "(a) Location 1, daylight"
        },
        {
          "src": "img/P43.jpg",
          "caption": "(b) Location 2, after dark"
        }
      ],
      "items": [
        {
          "code": "S06-D",
          "label": "Panel (a), location 1, daylight"
        },
        {
          "code": "S06-N",
          "label": "Panel (b), location 2, after dark"
        }
      ]
    },
    {
      "id": "S07",
      "title": "Footpath under tree canopy after dark",
      "question": "How safe would you feel walking along this path after dark?",
      "perspective": "Walking",
      "photos": [
        {
          "src": "img/P14.jpg",
          "caption": "After dark"
        }
      ],
      "items": [
        {
          "code": "S07",
          "label": "Your rating"
        }
      ]
    },
    {
      "id": "S08",
      "title": "Bicycles parked along the carriageway",
      "question": "How safe would you feel cycling along this road?",
      "perspective": "Cycling",
      "photos": [
        {
          "src": "img/P12.jpg",
          "caption": "After dark"
        }
      ],
      "items": [
        {
          "code": "S08",
          "label": "Your rating"
        }
      ]
    },
    {
      "id": "S09",
      "title": "Damaged and fallen traffic signs",
      "question": "With the signs in this condition, how safe would you feel cycling on this road?",
      "perspective": "Cycling",
      "photos": [
        {
          "src": "img/P53.jpg",
          "caption": "(a) Speed-limit sign"
        },
        {
          "src": "img/P45.jpg",
          "caption": "(b) Cycle and pedestrian sign"
        }
      ],
      "items": [
        {
          "code": "S09",
          "label": "Your rating"
        }
      ]
    },
    {
      "id": "S10",
      "title": "Riders using a phone while moving",
      "question": "How safe would you feel cycling near riders using a phone like this?",
      "perspective": "Cycling",
      "photos": [
        {
          "src": "img/D3.jpg",
          "caption": "(a) Motorised two-wheeler"
        },
        {
          "src": "img/D5.jpg",
          "caption": "(b) Bicycle"
        }
      ],
      "items": [
        {
          "code": "S10",
          "label": "Your rating"
        }
      ]
    }
  ]
};
