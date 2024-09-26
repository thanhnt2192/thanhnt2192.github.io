window.app["battle"] = {
  "initialize": function (core) {
    this["battle"]["ally"] = {
      "soldier": {
        "list": [
          {
            position: {
              x: 30,
              y: 30,
              absolute: true
            }
          },
          {
            position: {
              x: 20,
              y: 64,
              absolute: true
            }
          },
          {
            position: {
              x: 10,
              y: 40,
              absolute: true
            }
          },
          {
            position: {
              x: 8,
              y: 54,
              absolute: true
            }
          }
        ],
        "attack": 1, // attack
        "health": 10000 // defend * 10000
      },
      "commander": {
        "tilemap": [],
        position: {
          x: 40,
          y: 50,
          absolute: true
        },
        "attack": 1, // technique
        "health": 20000 // stamina * 20000
      },
      "render": function (core) {
        for (let i = 0; i < 4; i++) {
          core.screen.draw(this["battle"]["ally"]["soldier"]["list"][i]);
        }
        core.screen.draw(this["battle"]["ally"]["commander"]);
      },
      "count": 5,
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
      "count": 5,
      "damage": 0
    };
    for (i = 0; i < 6; i++) {
      this["battle"]["ally"]["commander"]["tilemap"][i] = [];
      for (j = 0; j < 5; j++) {
        this["battle"]["ally"]["commander"]["tilemap"][i][j] = this["tileset"]["black"];
      }
    }
    for (i = 0; i < 4; i++) {
      this["battle"]["ally"]["soldier"]["list"][i]["tilemap"] =  this["battle"]["ally"]["commander"]["tilemap"];
    }

    core.screen.scroll(0, 0);

    this["battle"]["status"] = 0;

    this["battle"]["animation"] = {
      "frame": 0
    };

    this["battle"]["background"] = {
      "tilemap": [],
      position: {
        x: 0,
        y: 0,
        absolute: true
      }
    };
    for (i = 0; i < 18; i++) {
      this["battle"]["background"]["tilemap"][i] = [];
      for (j = 0; j < 22; j++) {
        this["battle"]["background"]["tilemap"][i][j] = this["tileset"]["white"];
      }
    }

    this["battle"]["cover"] = {
      "tilemap": [],
      position: {
        x: -20,
        y: 0,
        absolute: true
      },
      "animation": {
        "out": {
          "status": 1,
          "frame": 0,
          "start": -16,
          "end": 600,
          "speed": 8,
          "animate": function () {
            const cover = this["battle"]["cover"];
            const animation = cover["animation"]["out"];
            if (animation["status"] === 0) {
              return;
            }
            if (animation["frame"] > animation["end"]) {
              animation["status"] = 0;
              this["battle"]["status"] = 1;
              return;
            }
            cover["position"]["x"] = animation["start"] + (animation["frame"] * animation["speed"]);
            animation["frame"]++;
          }
        }
      },
      "render": function (core) {
        const cover = this["battle"]["cover"];
        const animation = cover["animation"]["out"];
        core.call(animation["animate"], []);
        core.screen.draw(cover);
      }
    }

    for (i = 0; i < 18; i++) {
      this["battle"]["cover"]["tilemap"][i] = [];
      for (j = 0; j < (22 + 2); j++) {
        this["battle"]["cover"]["tilemap"][i][j] = this["tileset"]["black"];
      }
    }

    this["battle"]["mask"] = {
      "tilemap": [],
      position: {
        x: 0,
        y: 8 * 3,
        absolute: true
      },
    };

    for (i = 0; i < 15; i++) {
      this["battle"]["mask"]["tilemap"][i] = [];
      for (j = 0; j < 22; j++) {
        if (i < 3 || i > 10 || j < 1 || (j > 9 && j < 12) || j > 20) {
          this["battle"]["mask"]["tilemap"][i][j] = this["tileset"]["gray"];
        }
      }
    }

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
    core.screen.draw(this["battle"]["background"]);
    core.screen.draw(this.logo);
    core.screen.draw(atb);
    core.screen.draw(this["battle"]["mask"]);
    core.call(this["battle"]["ally"]["render"], [core]);
    core.call(this["battle"]["cover"]["render"], [core]);
  }
};
