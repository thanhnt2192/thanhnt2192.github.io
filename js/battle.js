window.app["battle"] = {
  "initialize": function (core) {
    this["battle"]["ally"] = {
      "soldier": {
        "attack": 1, // attack
        "health": 10000 // defend * 10000
      },
      "commander": {
        "attack": 1, // technique
        "health": 20000 // stamina * 20000
      },
      "count": 6,
      "damage": 0
    };
    this["battle"]["enemy"] = {
      "soldier": {
        "list": [
          {
            position: {
              x: 20,
              y: 10,
              absolute: true
            },
            animation: {
              out: {
                "status": 0,
                "frame": 0
              }
            }
          }
        ],
        "attack": 1, // attack
        "health": 10000 // defend * 10000
      },
      "commander": {
        "attack": 1, // technique
        "health": 20000 // stamina * 20000
      },
      "count": 6,
      "damage": 0
    };

    core.screen.scroll(0, 0);

    this["battle"]["status"] = 1; // TODO: set to 0 at battle begin to show begin animation

    this["battle"]["animation"] = {
      "frame": 0
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
  "calculate": function (core) {
    const ally = this["battle"]["ally"];
    const enemy = this["battle"]["enemy"];
    if (ally["count"] > 0 && enemy["count"] > 0) {
      // Ally attack
      let attackAlly = 0;
      attackAlly += ally["commander"]["attack"];
      attackAlly += ally["soldier"]["attack"];
      enemy["damage"] += attackAlly * core.timestep;
      if (enemy["count"] > 1) {
        if (enemy["damage"] >= enemy["soldier"]["health"]) {
          enemy["damage"] -= enemy["soldier"]["health"];
          enemy["count"]--;
          console.log("Enemy count: " + enemy["count"]);
          this["battle"]["status"] = 0;
        }
      } else {
        if (enemy["damage"] >= enemy["commander"]["health"]) {
          enemy["damage"] -= enemy["commander"]["health"];
          enemy["count"]--;
          console.log("Win");
          this["battle"]["status"] = 0;
        }
      }
      // Enemy attack
      // if (enemy["count"] > 0) {
      if (this["battle"]["status"] === 1) {
        let attackEnemy = 0;
        attackEnemy += enemy["commander"]["attack"];
        attackEnemy += enemy["soldier"]["attack"];
        ally["damage"] += attackEnemy * core.timestep;
        if (ally["count"] > 1) {
          if (ally["damage"] >= ally["soldier"]["health"]) {
            ally["damage"] -= ally["soldier"]["health"];
            ally["count"]--;
            console.log("Ally count: " + ally["count"]);
            this["battle"]["status"] = 0;
          }
        } else {
          if (ally["damage"] >= ally["commander"]["health"]) {
            ally["damage"] -= ally["commander"]["health"];
            ally["count"]--;
            console.log("Lose");
            this["battle"]["status"] = 0;
          }
        }
      }
    }
  },
  "render": function (core) {
    if (this["battle"]["status"] === 1) {
      core.call(this["battle"]["calculate"], [core]);
    } else {
      if (this["battle"]["animation"]["frame"] < 600) {
        this["battle"]["animation"]["frame"]++;
      } else {
        this["battle"]["animation"]["frame"] = 0;
        this["battle"]["status"] = 1;
        console.log("battle active");
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
