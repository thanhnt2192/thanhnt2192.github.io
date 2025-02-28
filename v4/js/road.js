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
      "bullets": [],
      "animation": {
        "walk": {
          "a": 1,
          "index": 1,
          "delay": 0,
          "animate": function (core) {
            const animation = this["road"]["player"]["animation"]["walk"];
            animation["delay"] += core.timestep;
            if (animation["delay"] > 200) {
              animation["delay"] -= 200;
            } else {
              return;
            }
            if (animation["index"] !== 1) {
              animation["a"] = 0 - animation["a"];
            }
            animation["index"] += animation["a"];
            this["road"]["player"]["tilemap"] = this["tileset"]["player"][animation["index"]];
          }
        }
      },
      "interval": {
        "move": 0
      },
      "move": function (core) {
        const player = this["road"]["player"];
        if (core.control.left.hold || core.control.right.hold) {
          player["interval"]["move"] += core.timestep;
          const interval = 20;
          while (player["interval"]["move"] >= interval) {
            player["interval"]["move"] -= interval;
            if (core.control.left.hold) {
              player["position"]["x"] -= 1;
            }
            if (core.control.right.hold) {
              player["position"]["x"] += 1;
            }
          }
          core.call(player["animation"]["walk"]["animate"], [core]);
        }
      },
      "attack": {
        "frameskip": 0,
        "process": function (core) {
          const player = this["road"]["player"];
          for (let i = 0; i < player["bullets"].length; i++) {
            const interval = 20;
            player["bullets"][i]["frameskip"] += core.timestep;
            while (player["bullets"][i]["frameskip"] >= interval) {
              player["bullets"][i]["position"]["y"] -= 2;
              player["bullets"][i]["frameskip"] -= interval;
            }
          }
          let index = 0;
          while (index < player["bullets"].length) {
            if (player["bullets"][index]["position"]["y"] < -2) {
              // Remove
              player["bullets"].splice(index, 1);
            } else {
              index++;
            }
          }

          player["attack"]["frameskip"] += core.timestep;
          const cooldown = 2000;
          if (player["attack"]["frameskip"] > cooldown) {
            const bullet = {
              "tilemap": this["tileset"]["qi"],
              "position": {
                "x": player["position"]["x"] + 4,
                "y": player["position"]["y"] - 10,
                "absolute": false
              },
              "frameskip": 0
            };
            player["bullets"].push(bullet);
            player["attack"]["frameskip"] -= cooldown;
          }
        }
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
    core.call(this["road"]["player"]["move"], [core]);
    core.call(this["road"]["player"]["attack"]["process"], [core]);
    core.screen.draw(this["road"]["background"]);
    core.screen.draw(this["road"]["player"]);
    for (let i = 0; i < this["road"]["player"]["bullets"].length; i++) {
      core.screen.draw(this["road"]["player"]["bullets"][i]);
    }
    core.screen.draw(this["road"]["qi"]);
  }
};
