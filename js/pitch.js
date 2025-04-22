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
    this["pitch"]["ball"] = {
      "tilemap": [[this["tileset"]["ball"][0]]],
      "count": 0,
      "position": {
        "x": 84,
        "y": 118,
        "absolute": false
      },
      "timestamp": 1000,
      "animate": function ({ timestamp }) {
        const obj = this["pitch"]["ball"];
        if (obj["timestamp"] < timestamp) {
          obj["timestamp"] += 40;
          obj["count"] = (obj["count"] + 1) % 3;
          obj["tilemap"] = [[this["tileset"]["ball"][obj["count"]]]];
          if (obj["timestamp"] < 2000) {
            obj["position"]["x"] += -2;
            obj["position"]["y"] += -4;
          } else if (obj["timestamp"] < 2500) {
            obj["position"]["x"] += -1;
            obj["position"]["y"] += 2;
          } else if (obj["timestamp"] < 4500) {
            obj["position"]["x"] += 4;
            obj["position"]["y"] += 1;
          }
        }
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
    this["pitch"]["ball"]["shadow"] = {
      "tilemap": [[this["tileset"]["shadow"]]],
      "position": {
        "x": 84,
        "y": 120,
        "absolute": false
      },
      "animate": function () {
        this["pitch"]["ball"]["shadow"]["position"]["x"] = this["pitch"]["ball"]["position"]["x"];
        this["pitch"]["ball"]["shadow"]["position"]["y"] = this["pitch"]["ball"]["position"]["y"] + 2;
      }
    };
  },
  "animate": function ({ timestamp }, obj) {
    const animation = obj["animation"]["list"][obj["animation"]["index"]];
    if (timestamp > animation["end"]) {
      // obj["animation"]["index"]++;
    }
    while (animation["timestamp"] < timestamp) {
      animation["timestamp"] += animation["direction"]["step"];
      obj["position"]["x"] += animation["direction"]["x"];
      obj["position"]["y"] += animation["direction"]["y"];
    }
  },
  "render": function (core) {
    core.screen.draw(this["pitch"]["background"]);
    // core.call(this["pitch"]["animate"], [core, this["pitch"]["ball"]]);
    core.call(this["pitch"]["ball"]["animate"], [core]);
    core.call(this["pitch"]["ball"]["shadow"]["animate"], [core]);
    core.screen.draw(this["pitch"]["ball"]["shadow"]);
    core.screen.draw(this["pitch"]["ball"]);
    // core.call(this["pitch"]["animate"], [core, this["pitch"]["ball"]["shadow1"]]);
    // core.screen.draw(this["pitch"]["ball"]["shadow1"]);
    core.screen.draw(this["pitch"]["player"]);
  }
};
