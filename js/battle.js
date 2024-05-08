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

    const line = this["tileset"]["line"]["red"];
    this["battle"]["atb"] = {
      "tilemap": [[line, line, line, line, line, line, line, line]],
      "position": {
        "x": 0,
        "y": 112,
        "absolute": true
      }
    };
  },
  "render": function (core) {
    const atb = this["battle"]["atb"];
    core.screen.draw(this.logo);
    core.screen.draw(atb);
  }
};
