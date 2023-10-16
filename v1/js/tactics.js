window.game = {
  ...window.game,
  positions: {
    gk: [
      "sweeper" // TODO: low priority
    ],
    cb: {
      "defender": "Central Defender", // Hậu vệ trung tâm
      "playmaker": "Ball Playing Defender", // Hậu vệ làm bóng
    },
    rb: {
      "defender": "Full Back", // hậu vệ biên
      "winger": "Wing Back", // hậu vệ chạy cánh
      "playmaker": "Inverted Wing Back" // Hậu vệ cánh ảo
    },
    cm: {
      "playmaker": "Central Playmaker", // Tiền vệ kiến thiết
      "winger": "Wide Playmaker" // Tiền vệ kiến thiết chơi rộng
    },
    dm: {
      "defender": "Anchor Man", // Tiền vệ mỏ neo/đánh chặn
      "playmaker": "Deep Lying Playmaker" // Tiền vệ kiến thiết lùi sâu
    },
    am: {
      "playmaker": "Advanced Playmaker", // Tiền vệ kiến thiết dâng cao
      "striker": "Shadow Striker" // Tiền đạo ẩn
    },
    cf: {
      "striker": "Advanced Forward", // Tiền đạo cắm
      "playmaker": "False Nine" // Số 9 ảo
    },
    rw: {
      "winger": "Winger", // Tiền vệ chạy cánh
      "striker": "Inside Forward" // Tiền đạo cánh
    },
  },
  skills: [
    {
      name: "Intuition",
      description: "Short pass"
    },
    {
      name: "Vision",
      description: "Long pass"
    },
    {
      name: "Bolt",
      description: "Speed"
    },
    {
      name: "Challenger",
      description: "1 vs 1"
    },
    {
      name: "Aircraft",
      alias: "Ikarus",
      description: "Sky ruler"
    },
    {
      name: "Fighter",
      description: "Effect when losing"
    },
    {
      name: "Canon",
      description: "Shoot"
    }
  ],
  captain_skills: {
  },
  tactics: {
    mentality: {
      "defensive": {
        name: "Defensive"
      },
      "normal": {
        name: "Normal"
      },
      "attacking": {
        name: "Attacking"
      }
    },
    passing_style: {
      "short": {
        name: "Shorter"
      },
      "mix": {
        name: "Mixed"
      },
      "long": {
        name: "Longer"
      }
    },
    dribbling_style: {
      "less": {
        name: "Less dribbles, more passes"
      },
      "common": {
        name: "Common"
      },
      "more": {
        name: "More dribbles, less passes"
      }
    },
    shooting_style: {
      "careful": {
        name: "Work ball into box"
      },
      "common": {},
      "intense": {
        name: "Shoot on signt"
      }
    },
    tempo: {
      "slow": {
        name: "Slow"
      },
      "normal": {
        name: "Normal"
      },
      "fast": {
        name: "Fast"
      }
    },
    attack_direction: {
      "center": {},
      "wings": {}
    },
    pressing: {
      "own_area": {},
      "own_half": {},
      "all_over": {}
    },
    aggression: {
      "careful": {},
      "normal": {},
      "drastic": {}
    },
    set_piece: {
      left_corner_kick: {},
      right_corner_kick: {},
      left_free_kick: {},
      right_free_kick: {},
      penalty_kick: {}
    },
    offside_trap: {
      "yes": {
        name: "Yes"
      },
      "no": {
        name: "No"
      }
    }
  },
};
