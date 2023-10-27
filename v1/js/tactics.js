window.game = {
  ...window.game,
  styles: [
    {
      "role": "defender",
      "title": {
        "en": "No-Nonsense Defender",
        "vi": "Hậu vệ phá bóng"
      },
      "attributes": [
        { "en": "Tackling", "vi": "Cản phá" },
        { "en": "Marking", "vi": "Kèm người" },
        { "en": "Heading", "vi": "Đánh đầu" },
        { "en": "Strength", "vi": "Sức mạnh" },
        { "en": "Slide Tackling", "vi": "Xoạc bóng" }
      ]
    },
    {
      "role": "playmaker",
      "title": {
        "en": "Ball-Playing Defender",
        "vi": "Hậu vệ làm bóng"
      },
      "attributes": [
        { "en": "Tackling", "vi": "Cản phá" },
        { "en": "Heading", "vi": "Đánh đầu" },
        { "en": "Passing", "vi": "Chuyền bóng" },
        { "en": "Strength", "vi": "Sức mạnh" },
        { "en": "Slide Tackling", "vi": "Xoạc bóng" }
      ]
    },
    {
      "role": "defender",
      "title": {
        "en": "Anchor Man",
        "vi": "Tiền vệ đánh chặn"
      },
      "attributes": [
        { "en": "Marking", "vi": "Kèm người" },
        { "en": "Tackling", "vi": "Cản phá" },
        { "en": "Interceptions", "vi": "Cắt bóng" },
        { "en": "Passing", "vi": "Chuyền bóng" },
        { "en": "Heading", "vi": "Đánh đầu" }
      ]
    },
    {
      "role": "playmaker",
      "title": {
        "en": "Deep Lying Playmaker",
        "vi": "Tiền vệ kiến thiết lùi sâu"
      },
      "attributes": [
        { "en": "Short passing", "vi": "Chuyền ngắn" },
        { "en": "Long passing", "vi": "Chuyền dài" },
        { "en": "Long shots", "vi": "Sút xa" },
        { "en": "Dribbling", "vi": "Rê bóng" },
      ]
    },
    {
      "role": "balancer",
      "title": {
        "en": "Box to Box Midfielder",
        "vi": "Tiền vệ con thoi"
      },
      "attributes": [
        { "en": "Passing", "vi": "Chuyền bóng" },
        { "en": "Tackling", "vi": "Cản phá" },
        { "en": "Finishing", "vi": "Dứt điểm" },
        { "en": "Stamina", "vi": "Sức bền" }
      ]
    },
    {
      "role": "playmaker",
      "title": {
        "en": "Advanced Playmaker",
        "vi": "Tiền vệ kiến thiết"
      },
      "attributes": [
        { "en": "Passing", "vi": "Chuyền bóng" },
        { "en": "Long shots", "vi": "Sút xa" },
        { "en": "Dribbling", "vi": "Rê bóng" },
        { "en": "Finishing", "vi": "Dứt điểm" },
      ]
    },
    {
      "role": "striker",
      "title": {
        "en": "Shadow Striker",
        "vi": "Hộ công"
      },
      "attributes": [
        { "en": "Long shots", "vi": "Sút xa" },
        { "en": "Dribbling", "vi": "Rê bóng" },
        { "en": "Finishing", "vi": "Dứt điểm" },
        { "en": "Positioning", "vi": "Chạy chỗ" }, // Chọn vị trí, chạy chỗ không bóng (off the ball)
        { "en": "Passing", "vi": "Chuyền bóng" },
        { "en": "Heading", "vi": "Đánh đầu" },
      ]
    },
    {
      "role": "winger",
      "title": {
        "en": "Wing Back",
        "vi": "Hậu vệ cánh"
      },
      "attributes": [
        { "en": "Tackling", "vi": "Cản phá" },
        { "en": "Stamina", "vi": "Sức bền" },
        { "en": "Sprint", "vi": "Tốc độ" },
        { "en": "Crossing", "vi": "Tạt bóng" },
        { "en": "Passing", "vi": "Chuyền bóng" },
        { "en": "Slide Tackling", "vi": "Xoạc bóng" }
      ]
    },
    {
      "role": "playmaker",
      "title": {
        "en": "Inverted Wing Back",
        "vi": "Hậu vệ cánh ngược"
      },
      "attributes": [
        { "en": "Tackling", "vi": "Cản phá" },
        { "en": "Stamina", "vi": "Sức bền" },
        { "en": "Passing", "vi": "Chuyền bóng" },
        { "en": "Dribbling", "vi": "Rê bóng" },
        { "en": "Sprint", "vi": "Tốc độ" },
        { "en": "Slide Tackling", "vi": "Xoạc bóng" },
      ]
    },
    {
      "role": "winger",
      "title": {
        "en": "Dual Winger",
        "vi": "Tiền vệ cánh"
      },
      "attributes": [
        { "en": "Crossing", "vi": "Tạt bóng" },
        { "en": "Sprint", "vi": "Tốc độ" },
        { "en": "Stamina", "vi": "Sức bền" },
        { "en": "Tackling", "vi": "Cản phá" },
        { "en": "Passing", "vi": "Chuyền bóng" },
        { "en": "Dribbling", "vi": "Rê bóng" },
      ]
    },
    {
      "role": "striker",
      "title": {
        "en": "Inside Forward",
        "vi": "Tiền đạo cánh"
      },
      "attributes": [
        { "en": "Dribbling", "vi": "Rê bóng" },
        { "en": "Finishing", "vi": "Dứt điểm" },
        { "en": "Acceleration", "vi": "Tăng tốc" },
        { "en": "Long shots", "vi": "Sút xa" },
        { "en": "Passing", "vi": "Chuyền bóng" },
        { "en": "Positioning", "vi": "Chạy chỗ" } // Chọn vị trí, chạy chỗ không bóng (off the ball)
      ]
    },
    {
      "role": "playmaker",
      "title": {
        "en": "False Nine",
        "vi": "Số 9 ảo"
      },
      "attributes": [
        { "en": "Dribbling", "vi": "Rê bóng" },
        { "en": "Finishing", "vi": "Dứt điểm" },
        { "en": "Passing", "vi": "Chuyền bóng" },
        { "en": "Positioning", "vi": "Chạy chỗ" }, // Chọn vị trí, chạy chỗ không bóng (off the ball)
        { "en": "Acceleration", "vi": "Tăng tốc" },
        { "en": "Pressing", "vi": "Gây áp lực" }
      ]
    },
    {
      "role": "striker",
      "title": {
        "en": "Advanced Forward",
        "vi": "Tiền đạo cắm"
      },
      "attributes": [
        { "en": "Finishing", "vi": "Dứt điểm" },
        { "en": "Positioning", "vi": "Chạy chỗ" }, // Chọn vị trí, chạy chỗ không bóng (off the ball)
        { "en": "Strength", "vi": "Sức mạnh" },
        { "en": "Heading", "vi": "Đánh đầu" },
      ]
    }
  ],
  positions: {
    gk: [
      "sweeper" // TODO: low priority
    ],
    cb: {
      "defender": "Central Defender", // Hậu vệ trung tâm
      "playmaker": "Ball Playing Defender", // Hậu vệ làm bóng
      "attributes": [
        "Marking", // Kèm người, hạn chế tiền đạo chạy chỗ
        "Stading Tackle", // Cướp bóng
        "Sliding Tackle", // Xoạc bóng, khả năng nhận thẻ cao hơn
        "Interceptions", // Cắt bóng, chặn những đường chuyền và sút
        "Heading", // Đánh đầu, phá bóng (chuyền dài, phạt góc) hoặc ghi bàn (phạt góc)
        "Short Passing", // Chuyền ngắn
        "Long Passing", // Chuyền dài
        "Strength", // Sức mạnh, tì đè
        "Agility" // Tốc độ, nhanh nhẹn trong những pha bóng chạy về sau tình huống phạt góc để chống phản công
      ]
    },
    rb: {
      "defender": "Full Back", // hậu vệ biên
      "winger": "Wing Back", // hậu vệ chạy cánh
      "playmaker": "Inverted Wing Back", // Hậu vệ cánh ảo
      "attributes": [
        "Standing Tackle", // Cướp bóng
        "Sliding Tackle", // Xoạc bóng, khả năng nhận thẻ cao hơn
        "Interceptions", // Cắt bóng, chặn những đường chuyền và sút
        "Heading", // Đánh đầu, phá bóng (chuyền dài, phạt góc) hoặc ghi bàn (phạt góc)
        "Passing", // Chuyền bóng, chuyền ngắn và chuyền dài
        "Crossing", // Tạt bóng
        "Stamina", // Sức bền, di chuyển nhiều hơn
        "Sprint", // Tốc độ, nhanh nhẹn trong những pha bóng chạy về sau tình huống phạt góc để chống phản công
        "Acceleration" // Tăng tốc, bứt tốc để qua người
      ]
    },
    cm: {
      "playmaker": "Central Playmaker", // Tiền vệ kiến thiết
      "balancer": "Box to Box Midfielder", // Tiền vệ con thoi
      "winger": "Wide Playmaker" // Tiền vệ kiến thiết chơi rộng
    },
    dm: {
      "defender": "Anchor Man", // Tiền vệ mỏ neo/đánh chặn
      "playmaker": "Deep Lying Playmaker", // Tiền vệ kiến thiết lùi sâu
      "attributes": [
        "Marking", // Kèm người, hạn chế tiền đạo chạy chỗ
        "Tackle", // Cướp bóng
        "Interceptions", // Cắt bóng, chặn những đường chuyền và sút
        "Heading", // Đánh đầu, phá bóng (chuyền dài, phạt góc) hoặc ghi bàn (phạt góc)
        "Short Passing", // Chuyền ngắn
        "Long Passing", // Chuyền dài
        "Finishing", // Dứt điểm
        "Stamina", // Sức bền, di chuyển nhiều hơn
        "Agility" // Tốc độ, nhanh nhẹn trong những pha bóng chạy về sau tình huống phạt góc để chống phản công
      ]
    },
    am: {
      "playmaker": "Advanced Playmaker", // Tiền vệ kiến thiết dâng cao
      "striker": "Shadow Striker", // Tiền đạo ẩn
      "attributes": [
        "Pressing", // Gây áp lực, phòng ngự, cướp bóng
        "Tackle", // Cướp bóng
        "Interceptions", // Cắt bóng, chặn những đường chuyền và sút
        "Heading", // Đánh đầu, phá bóng (chuyền dài, phạt góc) hoặc ghi bàn (phạt góc)
        "Passing", // Chuyền
        "Long Shot", // Sút xa
        "Finishing", // Dứt điểm
        "Stamina", // Sức bền, di chuyển nhiều hơn
        "Agility" // Tốc độ, nhanh nhẹn trong những pha bóng chạy về sau tình huống phạt góc để chống phản công
      ]
    },
    cf: {
      "striker": "Advanced Forward", // Tiền đạo cắm
      "playmaker": "False Nine", // Số 9 ảo
      "attributes": [
        "Finishing", // Dứt điểm
        "Positioning", // Chọn vị trí, chạy chỗ không bóng (off the ball)
        "Acceleration", // Tăng tốc, bứt tốc để qua người
        "Pressing", // Gây áp lực, phòng ngự, cướp bóng
        "Heading", // Đánh đầu
        "Strength", // Sức mạnh, tì đè
        "Passing", // Chuyền
      ]
    },
    rw: {
      "winger": "Winger", // Tiền vệ chạy cánh
      "striker": "Inside Forward", // Tiền đạo cánh
      "attributes": [
        "Crossing", // Tạt bóng
        "Acceleration", // Tăng tốc, bứt tốc để qua người
        "Pressing", // Gây áp lực, phòng ngự, cướp bóng
        "Passing", // Chuyền
        "Stamina", // Sức bền, di chuyển nhiều hơn
        "Sprint", // Tốc độ, nhanh nhẹn trong những pha bóng chạy về sau tình huống phạt góc để chống phản công
      ]
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
