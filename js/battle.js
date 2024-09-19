window.app["battle"] = {
  "initialize": function (core) {
    core.screen.scroll(0, 0);

    this["battle"]["time"] = {
      "start": core.timestamp
    };
    this["battle"]["count"] = 0;
    this["battle"]["ally"] = {
      "damage": 0,
      "attack": 2,
      "defend": 5000,
      "health": 10000,
      "count": 6
    };
    this["battle"]["enemy"] = {
      "damage": 0,
      "attack": 1,
      "defend": 10000,
      "health": 20000,
      "count": 6
    };

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
        list: [
          this["tileset"]["line"]["red"],
          this["tileset"]["line"]["red"],
          this["tileset"]["line"]["red"],
          this["tileset"]["line"]["yellow"],
          this["tileset"]["line"]["yellow"],
          this["tileset"]["line"]["yellow"],
          this["tileset"]["line"]["white"],
          this["tileset"]["line"]["white"],
          this["tileset"]["line"]["white"]
        ],
        index: 0,
        change: function () {
          const atb = this["battle"]["atb"];
          for (let i = 0; i < atb["tilemap"][0].length; i++) {
            atb["tilemap"][0][i] = atb["color"]["list"][atb["color"]["index"]];
          }
        }
      }
    };
    const line = this["battle"]["atb"]["color"]["list"][this["battle"]["atb"]["color"]["index"]];
    this["battle"]["atb"]["tilemap"] = [[line, line, line, line, line, line, line, line]];
  },
  "render": function (core) {
    const ally = this["battle"]["ally"];
    const enemy = this["battle"]["enemy"];
    if (ally["count"] > 0 && enemy["count"] > 0) {
      enemy["damage"] += ally["attack"] * core.timestep;
      if (enemy["count"] > 1) {
        if (enemy["damage"] >= enemy["defend"]) {
          enemy["damage"] -= enemy["defend"];
          enemy["count"]--;
          console.log("Enemy count: " + enemy["count"]);
        }
      } else {
        if (enemy["damage"] >= enemy["health"]) {
          enemy["damage"] -= enemy["health"];
          enemy["count"]--;
          console.log("Win");
        }
      }
    }
    const atb = this["battle"]["atb"];
    if (core.control.down.hold) {
      if (atb["position"]["x"] < 0) {
        atb["position"]["x"] = atb["position"]["x"] + 1;
      }
      if (atb["position"]["x"] == 0) {
        atb["color"]["index"] = (atb["color"]["index"] + 1) % (3 * 3);
        core.call(this["battle"]["atb"]["color"]["change"], []);
      }
    }
    if (core.control.down.release) {
      atb["color"]["index"] = 0;
      core.call(this["battle"]["atb"]["color"]["change"], []);
      atb["position"]["x"] = 0 - 8 * 8;
    }
    core.screen.draw(this.logo);
    core.screen.draw(atb);
  }
};
