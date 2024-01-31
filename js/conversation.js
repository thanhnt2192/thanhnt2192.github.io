window.game["conversation"] = {
  "dialog": {
    "tilemap": [[], [], [], []],
    "position": {
      "x": 0,
      "y": 0,
      "absolute": false
    },
    "script": [
      ["Hello, I am Main", ""],
      ["Hello, I am Main", ""]
    ],
    "cursor": 0
  },
  "load": function () {
    const dialog = this.conversation["dialog"];
    let line = dialog["script"][dialog["cursor"]][0];
    let i = 0;
    while (i < line["length"]) {
      dialog["tilemap"][1][1 + i] = unicode[line[i]];
      i++;
    }
  },
  "initialize": function (core) {
    core.screen.scroll(0, 0);
    core.call(this["conversation"]["load"], []);
  },
  "render": function (core) {
    const tileset = this["tileset"];
    const unicode = tileset["unicode"];
    const dialog = this.conversation["dialog"];
    if (core.control.a.press) {
      dialog["cursor"]++;
      console.log(dialog["cursor"]);
      console.log(dialog["script"][dialog["cursor"]]);
      let line = dialog["script"][dialog["cursor"]][0];
      let i = 0;
      while (i < line["length"]) {
        dialog["tilemap"][1][1 + i] = unicode[line[i]];
        i++;
      }
    }
  }
};
