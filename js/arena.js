window.app["arena"] = {
  "initialize": function (core) {
    core.screen.scroll(0, 0);
    const hp = this["tileset"]["hp"];
    let hp2 = core.call(this["utils"]["tileset"]["clone"], [hp]);
    hp2 = [
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      2, 2, 2, 2, 0, 0, 0, 0,
      2, 2, 2, 2, 0, 0, 0, 0,
      2, 2, 2, 2, 0, 0, 0, 0,
      2, 2, 2, 2, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
    ];
    this["arena"]["hp"] = {
      "tilemap": [
        [hp, hp, hp2]
      ],
      "position": {
        "x": 4,
        "y": 0,
        "absolute": true
      }
    };
  },
  "render": function (core) {
    core.screen.draw(this["arena"]["hp"]);
  }
};
