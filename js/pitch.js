window.app["pitch"] = {
  "initialize": function (core) {
    core.screen.scroll(0, 0);
    this["pitch"]["background"] = {
      "tilemap": [],
      "position": {
        "x": 0,
        "y": 0,
        "absolute": false
      }
    };
    for (let i = 0; i < 18; i++) {
      this["pitch"]["background"]["tilemap"][i] = [];
      for (let j = 0; j < 22; j++) {
        this["pitch"]["background"]["tilemap"][i][j] = this["tileset"]["white"];
      }
    }
    this["pitch"]["player"] = {
      "tilemap": this["tileset"]["player"]["kick"][0],
      "position": {
        "x": 50,
        "y": 100,
        "absolute": false
      }
    };
  },
  "render": function (core) {
    core.screen.draw(this["pitch"]["background"]);
    core.screen.draw(this["pitch"]["player"]);
  }
};
