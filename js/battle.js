window.app["battle"] = {
  "initialize": function (core) {
    core.screen.scroll(0, 0);

    const unicode = this["tileset"]["unicode"];
    this["logo"] = {
      tilemap: [[unicode["N"], unicode["o"], unicode["D"], unicode["M"], unicode["G"], unicode["."], unicode["C"], unicode["O"], unicode["M"]]],
      position: {
        x: 20,
        y: 10,
        absolute: true
      }
    };

    this["battle"]["atb"] = {
      "position": {
        "x": 0 - 8 * 8,
        "y": 112,
        "absolute": true
      },
      color: {
        list: [this["tileset"]["line"]["red"], this["tileset"]["line"]["yellow"]],
        index: 0
      }
    };
    this["battle"]["atb"]["line"] = this["battle"]["atb"]["color"]["list"][this["battle"]["atb"]["color"]["index"]];
    const line = this["battle"]["atb"]["line"];
    this["battle"]["atb"]["tilemap"] = [[line, line, line, line, line, line, line, line]];
  },
  "render": function (core) {
    const atb = this["battle"]["atb"];
    if (core.control.down.hold) {
      if (atb["position"]["x"] < 0) {
        atb["position"]["x"] = atb["position"]["x"] + 1;
      }
      if (atb["position"]["x"] == 0) {
        atb["color"]["index"] = (atb["color"]["index"] + 1) % 2;
      }
    }
    if (core.control.down.release) {
      atb["position"]["x"] = 0 - 8 * 8;
    }
    core.screen.draw(this.logo);
    core.screen.draw(atb);
  }
};
