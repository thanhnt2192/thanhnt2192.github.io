label.SCRIPT_MAIN = 0;
label.SCRIPT_CONVERSATION = 1;
label.MEMORY_CONVERSATION = 10;

script[label.SCRIPT_MAIN] = function () {
};

script[label.SCRIPT_CONVERSATION] = function () {
  memory[label.MEMORY_CONVERSATION] = 1; // A
  memory[label.MEMORY_CONVERSATION + 1] = 2; // B
};

window.sd["conversation"] = {
  "script": [
    ["Hello, I am Main", ""],
    ["Hello, I am Main", ""]
  ],
  "cursor": 0,
  "load": function () {
    const unicode = this["tileset"]["unicode"];
    const dialog = this["conversation"]["dialog"];
    let line = this["conversation"]["script"][this["conversation"]["cursor"]][0];
    let i = 0;
    while (i < line["length"]) {
      dialog["text"]["tilemap"][1][1 + i] = unicode[line[i]];
      i++;
    }
  },
  "initialize": function (core) {
    core.screen.scroll(0, 0);
    const white = this["tileset"]["white"];
    this["conversation"]["dialog"] = {
      "background": {
        "tilemap": [
          [white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white],
          [white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white],
          [white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white],
          [white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white]
        ],
        "position": {
          "x": 0,
          "y": 112,
          "absolute": false
        }
      },
      "text": {
        "tilemap": [[], [], [] , []],
        "position": {
          "x": 0,
          "y": 112,
          "absolute": false
        }
      }
    };
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

    core.screen.draw(dialog.background);
    core.screen.draw(dialog.text);
  }
};
