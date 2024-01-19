window.game.data["conversation"] = {
  "dialog": {
    "tilemap": [],
    "position": {
      "x": 0,
      "y": 0,
      "absolute": false
    },
    "script": [],
    "cursor": 0
  },
  "initallize": function () {
    this.scroll["x"] = 0;
    this.scroll["y"] = 0;
  },
  "render": function () {
    const { input, tileset, data } = this;
    const unicode = tileset["unicode"];
    const conversation = data["conversation"];
    const dialog = conversation["dialog"];
    if (input["a"]["press"]) {
      dialog["cursor"]++;
      let line = dialog["script"][dialog["cursor"]][0];
      for (let i = 0; i < line.length; i++) {
        dialog["tilemap"][1][1 + i] = unicode[line[i]];
      }
    }
  }
};
