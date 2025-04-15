window.app["pitch"] = {
  "initialize": function (core) {
    core.screen.scroll(0, 0);
    this["pitch"]["background"] = {
      "tilemap": [],
      "position": {
        "x": 0,
        "y": 0,
        "absolute": false
      }
    };
    for (let i = 0; i < 18; i++) {
      this["pitch"]["background"]["tilemap"][i] = [];
      for (let j = 0; j < 22; j++) {
        this["pitch"]["background"]["tilemap"][i][j] = this["tileset"]["white"];
      }
    }
    this["pitch"]["player"] = {
      "tilemap": this["tileset"]["player"]["ready"][0],
      "position": {
        "x": 88,
        "y": 110,
        "absolute": false
      }
    };
    this["pitch"]["shadow"] = {
      "tilemap": [[this["tileset"]["shadow"]]],
      "position": {
        "x": 84,
        "y": 120,
        "absolute": false
      }
    };
    this["pitch"]["ball"] = {
      "tilemap": [[this["tileset"]["ball"][0]]],
      "position": {
        "x": 84,
        "y": 118,
        "absolute": false
      },
      "animation": {
        "index": 0,
        "list": [
          {
            "timestamp": 1000,
            "start": 1000,
            "end": 2000,
            "position": {
              "x": 84,
              "y": 118,
              "absolute": false
            },
            "direction": {
              "x": -5,
              "y": -10,
              "step": 100
            }
          }
        ]
      },
      "shadow1": {
        "tilemap": [[this["tileset"]["ball"][0]]],
        "position": {
          "x": 79,
          "y": 108,
          "absolute": false
        },
        "animation": {
          "index": 0,
          "list": [
            {
              "timestamp": 1000,
              "start": 1000,
              "end": 2000,
              "position": {
                "x": 79,
                "y": 108,
                "absolute": false
              },
              "direction": {
                "x": -5,
                "y": -10,
                "step": 100
              }
            }
          ]
        }
      }
    };
  },
  "animate": function (core, obj) {
    const animation = obj["animation"]["list"][obj["animation"]["index"]];
    if (core.timestamp > animation["end"]) {
      // obj["animation"]["index"]++;
    }
    while (animation["timestamp"] < core.timestamp) {
      animation["timestamp"] += animation["direction"]["step"];
      obj["position"]["x"] += animation["direction"]["x"];
      obj["position"]["y"] += animation["direction"]["y"];
    }
  },
  "render": function (core) {
    core.screen.draw(this["pitch"]["background"]);
    core.screen.draw(this["pitch"]["shadow"]);
    this["pitch"]["animate"](core, this["pitch"]["ball"]);
    core.screen.draw(this["pitch"]["ball"]);
    this["pitch"]["animate"](core, this["pitch"]["ball"]["shadow1"]);
    core.screen.draw(this["pitch"]["ball"]["shadow1"]);
    core.screen.draw(this["pitch"]["player"]);
  }
};
