window.app["battle"] = {
  "status": 0,
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
      "render": function (core) {
        for (let i = 0; i < 4; i++) {
          // for (let i = 0; i < (this["battle"]["ally"]["count"] - 1); i++) {
          core.screen.draw(this["battle"]["ally"]["soldier"]["list"][i]);
          core.screen.draw(this["battle"]["ally"]["soldier"]["list"][i]["remnant"]);
        }
        if (this["battle"]["ally"]["count"] > 0) {
          core.screen.draw(this["battle"]["ally"]["commander"]);
        }
        /*
        let alphaChannel = this["battle"]["animation"]["frame"];
        if (alphaChannel > 255) {
          alphaChannel = 255;
        }
        const remnant = this["battle"]["ally"]["soldier"]["list"][0]["remnant"];
        for (let i = 0; i < remnant["tilemap"]["length"]; i++) {
          for (let j = 0; j < remnant["tilemap"][i]["length"]; j++) {
            for (let k = 0; k < 64; k++) {
              if (remnant["tilemap"][i][j][k * 4] > 0) {
                remnant["tilemap"][i][j][k * 4 + 3] = alphaChannel;
              }
            }
          }
        }
        */
      },
      "list": [
        {
          position: {
            x: 40,
            y: 50,
            absolute: true
          },
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
      "attack": 1, // unit's damage
      "defend": 1, // unit's health = defend * 10000
      "technique": 1, // bonus damage for commander
      "stamina": 1, // bonus health for commander = stamina * 10000
      "value": 5,
      "count": 5,
      "defeat": 0, // Commander defeated
      "damage": 0,
      "initialize": function () {
        const battler = [];
        for (i = 0; i < 6; i++) {
          battler[i] = [];
          for (j = 0; j < 5; j++) {
            battler[i][j] = this["tileset"]["black"];
          }
        }
        // TODO: clone from battler
        const commander = battler;
        const soldier = battler;
        const remnant = battler;
        const tileset = {
          "commander": commander,
          "soldier": soldier,
          "remnant": remnant
        };
        const ally = this["battle"]["ally"];
        ally["tileset"] = tileset;

        ally["list"][0]["tilemap"] = commander;
        for (let i = 1; i < 5; i++) {
          ally["list"][i]["tilemap"] = soldier;
        }
      }
    };
    this["battle"]["enemy"] = {
      "soldier": {
        "attack": 1, // attack
        "health": 10000 // defend * 10000
      },
      "commander": {
        "attack": 1, // technique
        "health": 20000 // (defend + stamina) * 10000
      },
      "list": [
        {
          "position": {
            "x": 100,
            "y": 50,
            "absolute": true
          }
        },
        {
          "position": {
            "x": 100,
            "y": 50,
            "absolute": true
          }
        },
        {
          "position": {
            "x": 100,
            "y": 50,
            "absolute": true
          }
        },
        {
          "position": {
            "x": 100,
            "y": 50,
            "absolute": true
          }
        },
        {
          "position": {
            "x": 100,
            "y": 50,
            "absolute": true
          }
        },
      ],
      "attack": 1, // unit's damage
      "defend": 1, // unit's health = defend * 10000
      "technique": 1, // bonus damage for commander
      "stamina": 1, // bonus health for commander = stamina * 10000
      "value": 5,
      "count": 5,
      "defeat": 0, // Commander defeated
      "damage": 0,
      "initialize": function () {
        const battler = [];
        for (i = 0; i < 6; i++) {
          battler[i] = [];
          for (j = 0; j < 5; j++) {
            battler[i][j] = this["tileset"]["black"];
          }
        }
        // TODO: clone from battler
        const commander = battler;
        const soldier = battler;
        const remnant = battler;
        const tileset = {
          "commander": commander,
          "soldier": soldier,
          "remnant": remnant
        };
        this["battle"]["enemy"]["tileset"] = tileset;

        this["battle"]["enemy"]["list"][0]["tilemap"] = commander;
        for (let i = 1; i < 5; i++) {
          this["battle"]["enemy"]["list"][i]["tilemap"] = soldier;
        }
      },
      "render": function (core) {
        const enemy = this["battle"]["enemy"];
        for (let i = enemy["defeat"]; i < enemy["defeat"] + enemy["count"]; i++) {
          core.screen.draw(enemy["list"][i]);
        }
      }
    };

    this["battle"]["animation"] = {
      "start": {
        "status": 0,
        "frame": 0,
        "initialize": function () {
          this["battle"]["status"] = 0;
          const animation = this["battle"]["animation"]["start"];
          animation["frame"] = 0;
          animation["status"] = 1;
        },
        "animate": function () {
          const animation = this["battle"]["animation"]["start"];
          if (animation["status"] === 0) {
            return;
          }
          if (animation["frame"] < 600) {
            animation["frame"]++;
          } else {
            this["battle"]["status"] = 1;
            animation["status"] = 0;
            console.log("animation start END");
          }
        }
      },
      "death": {
        "status": 0,
        "frame": 0,
        "initialize": function () {
          this["battle"]["status"] = 0;
          const animation = this["battle"]["animation"]["death"];
          animation["frame"] = 0;
          animation["status"] = 1;
          // TODO: clone tileset soldier to remnant
          const enemy = this["battle"]["enemy"];
          for (let i = enemy["value"] + enemy["defeat"]; i < enemy["count"]; i++) {
            enemy["list"][i]["tilemap"] = enemy["tileset"]["remnant"];
          }
        },
        "animate": function () {
          const animation = this["battle"]["animation"]["death"];
          if (animation["status"] === 0) {
            return;
          }
          const enemy = this["battle"]["enemy"];
          if (animation["frame"] < 300) {
            // TODO: Modify tileset remnant
            animation["frame"]++;
          } else {
            enemy["count"] = enemy["value"];
            this["battle"]["status"] = 1;
            animation["status"] = 0;
            console.log("animation death END");
          }
        }
      },
      "render": function (core) {
        core.call(this["battle"]["animation"]["start"]["animate"], []);
        core.call(this["battle"]["animation"]["death"]["animate"], []);
      }
    };

    core.call(this["battle"]["animation"]["start"]["initialize"], []);

    core.call(this["battle"]["enemy"]["initialize"], []);

    for (i = 0; i < 6; i++) {
      this["battle"]["ally"]["commander"]["tilemap"][i] = [];
      for (j = 0; j < 5; j++) {
        this["battle"]["ally"]["commander"]["tilemap"][i][j] = this["tileset"]["black"];
      }
    }
    for (i = 0; i < 4; i++) {
      this["battle"]["ally"]["soldier"]["list"][i]["tilemap"] =  this["battle"]["ally"]["commander"]["tilemap"];
    }
    for (let i = 0; i < 6; i++) {
      this["battle"]["ally"]["commander"]["remnant"]["tilemap"][i] = [];
      for (j = 0; j < 5; j++) {
        this["battle"]["ally"]["commander"]["remnant"]["tilemap"][i][j] = [];
        for (k = 0; k < 64; k++) {
          if (this["battle"]["ally"]["commander"]["tilemap"][i][j][k * 4 + 3] > 0) {
            this["battle"]["ally"]["commander"]["remnant"]["tilemap"][i][j][k * 4 + 0] = 0xFF;
            this["battle"]["ally"]["commander"]["remnant"]["tilemap"][i][j][k * 4 + 1] = 0xFF;
            this["battle"]["ally"]["commander"]["remnant"]["tilemap"][i][j][k * 4 + 2] = 0xFF;
            this["battle"]["ally"]["commander"]["remnant"]["tilemap"][i][j][k * 4 + 3] = 0x00;
          } else {
            this["battle"]["ally"]["commander"]["remnant"]["tilemap"][i][j][k * 4 + 0] = 0x00;
            this["battle"]["ally"]["commander"]["remnant"]["tilemap"][i][j][k * 4 + 1] = 0x00;
            this["battle"]["ally"]["commander"]["remnant"]["tilemap"][i][j][k * 4 + 2] = 0x00;
          }
        }
      }
    }
    for (i = 0; i < 4; i++) {
      this["battle"]["ally"]["soldier"]["list"][i]["remnant"] = {};
      this["battle"]["ally"]["soldier"]["list"][i]["remnant"]["position"] = this["battle"]["ally"]["soldier"]["list"][i]["position"];
      this["battle"]["ally"]["soldier"]["list"][i]["remnant"]["tilemap"] =  this["battle"]["ally"]["commander"]["remnant"]["tilemap"];
    }

    core.screen.scroll(0, 0);

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
    if (this["battle"]["status"] === 0) {
      return;
    }
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
          enemy["value"]--;
          console.log("Enemy value: " + enemy["value"]);
          core.call(this["battle"]["animation"]["death"]["initialize"], []);
        }
      } else {
        if (enemy["damage"] >= enemy["commander"]["health"]) {
          enemy["damage"] -= enemy["commander"]["health"];
          enemy["value"]--;
          enemy["defeat"] = 1;
          console.log("Win");
          core.call(this["battle"]["animation"]["death"]["initialize"], []);
        }
      }
      // Enemy attack
      // if (enemy["value"] > 0) {
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
            core.call(this["battle"]["animation"]["death"]["initialize"], []);
          }
        } else {
          if (ally["damage"] >= ally["commander"]["health"]) {
            ally["damage"] -= ally["commander"]["health"];
            ally["count"]--;
            console.log("Lose");
            core.call(this["battle"]["animation"]["death"]["initialize"], []);
          }
        }
      }
    }
  },
  "render": function (core) {
    core.call(this["battle"]["calculate"], [core]);

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
    core.call(this["battle"]["animation"]["render"], [core]);
    core.call(this["battle"]["ally"]["render"], [core]);
    core.call(this["battle"]["enemy"]["render"], [core]);
    core.call(this["battle"]["cover"]["render"], [core]);
  }
};
