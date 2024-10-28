window.app["road"] = {
  "initialize": function (core) {
    core.screen.scroll(0, 0);
    this["road"]["background"] = {
      "tilemap": [],
      "position": {
        "x": 0,
        "y": 0,
        "absolute": false
      }
    };
    for (let i = 0; i < 18; i++) {
      this["road"]["background"]["tilemap"][i] = [];
      for (let j = 0; j < 22; j++) {
        this["road"]["background"]["tilemap"][i][j] = this["tileset"]["white"];
      }
    }
    this["road"]["player"] = {
      "tilemap": this["tileset"]["player"][1],
      "position": {
        "x": 50,
        "y": 100,
        "absolute": false
      },
      "move": function (core) {
        //
      }
    };
    this["road"]["qi"] = {
      "tilemap": this["tileset"]["qi"],
      "position": {
        "x": 10,
        "y": 20,
        "absolute": false
      }
    };
  },
  "render": function (core) {
    core.screen.draw(this["road"]["background"]);
    core.screen.draw(this["road"]["player"]);
    core.screen.draw(this["road"]["qi"]);
  }
};
