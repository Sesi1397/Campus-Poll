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
      "title": "Signed cycle and pedestrian crossing at a separator",
      "question": "How safe would you feel crossing here by bicycle?",
      "perspective": "Crossing by bicycle",
      "photos": [
        {
          "src": "img/P05.jpg",
          "caption": "(a) Daylight"
        },
        {
          "src": "img/P06.jpg",
          "caption": "(b) After dark"
        }
      ],
      "items": [
        {
          "code": "S02-D",
          "label": "Panel (a), daylight"
        },
        {
          "code": "S02-N",
          "label": "Panel (b), after dark"
        }
      ]
    },
    {
      "id": "S03",
      "title": "Zebra crossing",
      "question": "How safe would you feel crossing the road here on foot?",
      "perspective": "Crossing on foot",
      "photos": [
        {
          "src": "img/P11.jpg",
          "caption": "After dark"
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
      "title": "Zebra crossings at two other locations",
      "question": "How safe would you feel crossing on foot at crossings like these?",
      "perspective": "Crossing on foot",
      "photos": [
        {
          "src": "img/P20.jpg",
          "caption": "(a) Location 1, daylight"
        },
        {
          "src": "img/P47.jpg",
          "caption": "(b) Location 2, daylight"
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
      "title": "Bend on a roundabout approach (posted limit 40 km/h)",
      "question": "How safe would you feel cycling around this bend?",
      "perspective": "Cycling",
      "photos": [
        {
          "src": "img/P22.jpg",
          "caption": "(a) Daylight"
        },
        {
          "src": "img/P17.jpg",
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
      "title": "Roundabout with a landscaped central island",
      "question": "How safe would you feel cycling through this roundabout?",
      "perspective": "Cycling",
      "photos": [
        {
          "src": "img/P19.jpg",
          "caption": "(a) Daylight, view 1"
        },
        {
          "src": "img/P23.jpg",
          "caption": "(b) Daylight, view 2"
        }
      ],
      "items": [
        {
          "code": "S06",
          "label": "Your rating"
        }
      ]
    },
    {
      "id": "S07",
      "title": "Roundabout with a clock tower",
      "question": "How safe would you feel cycling through this roundabout?",
      "perspective": "Cycling",
      "photos": [
        {
          "src": "img/P03.jpg",
          "caption": "Daylight"
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
      "title": "Junction with a planter at the centre",
      "question": "How safe would you feel cycling through this junction?",
      "perspective": "Cycling",
      "photos": [
        {
          "src": "img/P49.jpg",
          "caption": "Daylight"
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
      "title": "Two-lane road approaching a hedge island",
      "question": "How safe would you feel walking along this road?",
      "perspective": "Walking",
      "photos": [
        {
          "src": "img/P26.jpg",
          "caption": "(a) Daylight"
        },
        {
          "src": "img/P27.jpg",
          "caption": "(b) After dark"
        }
      ],
      "items": [
        {
          "code": "S09-D",
          "label": "Panel (a), daylight"
        },
        {
          "code": "S09-N",
          "label": "Panel (b), after dark"
        }
      ]
    },
    {
      "id": "S10",
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
          "code": "S10-D",
          "label": "Panel (a), daylight"
        },
        {
          "code": "S10-N",
          "label": "Panel (b), after dark"
        }
      ]
    },
    {
      "id": "S11",
      "title": "Footway beside a construction hoarding",
      "question": "How safe would you feel walking along this footway?",
      "perspective": "Walking",
      "photos": [
        {
          "src": "img/P38.jpg",
          "caption": "(a) Daylight"
        },
        {
          "src": "img/P41.jpg",
          "caption": "(b) After dark"
        }
      ],
      "items": [
        {
          "code": "S11-D",
          "label": "Panel (a), daylight"
        },
        {
          "code": "S11-N",
          "label": "Panel (b), after dark"
        }
      ]
    },
    {
      "id": "S12",
      "title": "Paved footway beside a large tree",
      "question": "How safe would you feel walking along this footway?",
      "perspective": "Walking",
      "photos": [
        {
          "src": "img/P39.jpg",
          "caption": "(a) Daylight"
        },
        {
          "src": "img/P42.jpg",
          "caption": "(b) After dark"
        }
      ],
      "items": [
        {
          "code": "S12-D",
          "label": "Panel (a), daylight"
        },
        {
          "code": "S12-N",
          "label": "Panel (b), after dark"
        }
      ]
    },
    {
      "id": "S13",
      "title": "Footways with trees within the walking width",
      "question": "How safe would you feel walking along footways like these?",
      "perspective": "Walking",
      "photos": [
        {
          "src": "img/P31.jpg",
          "caption": "(a) Daylight"
        },
        {
          "src": "img/P43.jpg",
          "caption": "(b) After dark"
        },
        {
          "src": "img/P44.jpg",
          "caption": "(c) After dark"
        }
      ],
      "items": [
        {
          "code": "S13-D",
          "label": "Panel (a), daylight"
        },
        {
          "code": "S13-N",
          "label": "Panels (b)–(c), after dark"
        }
      ]
    },
    {
      "id": "S14",
      "title": "Changes of surface along footways and paths",
      "question": "How safe would you feel walking along paths like these?",
      "perspective": "Walking",
      "photos": [
        {
          "src": "img/P29.jpg",
          "caption": "(a) Daylight"
        },
        {
          "src": "img/P30.jpg",
          "caption": "(b) Daylight"
        },
        {
          "src": "img/P10.jpg",
          "caption": "(c) After dark"
        }
      ],
      "items": [
        {
          "code": "S14-D",
          "label": "Panels (a)–(b), daylight"
        },
        {
          "code": "S14-N",
          "label": "Panel (c), after dark"
        }
      ]
    },
    {
      "id": "S15",
      "title": "Footpaths under tree canopy after dark",
      "question": "How safe would you feel walking along these paths after dark?",
      "perspective": "Walking",
      "photos": [
        {
          "src": "img/P14.jpg",
          "caption": "(a) After dark"
        },
        {
          "src": "img/P15.jpg",
          "caption": "(b) After dark"
        },
        {
          "src": "img/P36.jpg",
          "caption": "(c) After dark"
        }
      ],
      "items": [
        {
          "code": "S15",
          "label": "Your rating"
        }
      ]
    },
    {
      "id": "S16",
      "title": "Bicycles parked along the carriageway",
      "question": "How safe would you feel cycling along this road?",
      "perspective": "Cycling",
      "photos": [
        {
          "src": "img/P12.jpg",
          "caption": "(a) After dark"
        },
        {
          "src": "img/P13.jpg",
          "caption": "(b) After dark"
        }
      ],
      "items": [
        {
          "code": "S16",
          "label": "Your rating"
        }
      ]
    },
    {
      "id": "S17",
      "title": "Condition of traffic signs",
      "question": "How safe would you feel cycling on roads where the signs look like these?",
      "perspective": "Cycling",
      "photos": [
        {
          "src": "img/P53.jpg",
          "caption": "(a) Daylight"
        },
        {
          "src": "img/P54.jpg",
          "caption": "(b) Daylight"
        },
        {
          "src": "img/P45.jpg",
          "caption": "(c) Daylight"
        }
      ],
      "items": [
        {
          "code": "S17",
          "label": "Your rating"
        }
      ]
    }
  ]
};
