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
      "tilemap": this["tileset"]["player"]["home"]["run"][7][1],
      "position": {
        "x": 88,
        "y": 110,
        "absolute": false
      }
    };
    this["pitch"]["passer"] = {
      "tilemap": this["tileset"]["player"]["home"]["run"][5][1],
      "count": 1,
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
      "timestamp": 5000,
      "animate": function ({ timestamp }) {
        const obj = this["pitch"]["ball"];
        while (obj["timestamp"] < timestamp) {
          obj["count"] = (obj["count"] + 1) % 3;
          obj["tilemap"] = [[this["tileset"]["ball"][obj["count"]]]];
          if (obj["timestamp"] < 6000) {
            obj["position"]["x"] += -2;
            obj["position"]["y"] += -4;
          } else if (obj["timestamp"] < 7000) {
            // stop
          } else if (obj["timestamp"] < 7500) {
            obj["position"]["x"] += -1;
            obj["position"]["y"] += 2;
          } else if (obj["timestamp"] < 9500) {
            obj["position"]["x"] += 4;
            obj["position"]["y"] += 1;
          }
          obj["timestamp"] += 40;
        }
      },
      "remnants": [
        {
          "tilemap": null,
          "count": -1,
          "timestamp": 5000,
          "position": {
            "x": 84,
            "y": 118,
            "absolute": false
          },
          "animate": function ({ timestamp }) {
            const obj = this["pitch"]["ball"]["remnants"][0];
            while (obj["timestamp"] < timestamp) {
              if (obj["timestamp"] < 6080) {
                obj["count"] = (obj["count"] + 1);
                if (obj["count"] > 2) {
                  obj["count"] = 0;
                  obj["position"]["x"] += -18;
                  obj["position"]["y"] += -36;
                }
                obj["tilemap"] = [[this["tileset"]["remnants"][obj["count"]]]];
              } else if (obj["timestamp"] > 6080) {
                obj["tilemap"] = null;
              }
              obj["timestamp"] += 120;
            }
            /*
            if (timestamp > 5000 && timestamp < 5360) {
              obj["tilemap"] = [[this["tileset"]["ball"][0]]];
              obj["position"]["x"] = 84;
              obj["position"]["y"] = 118;
            } else if (timestamp > 5360 && timestamp < 5720) {
              obj["tilemap"] = [[this["tileset"]["ball"][0]]];
              obj["position"]["x"] = 66;
              obj["position"]["y"] = 82;
            } else if (timestamp > 5720 && timestamp < 6080) {
              obj["tilemap"] = [[this["tileset"]["ball"][0]]];
              obj["position"]["x"] = 48;
              obj["position"]["y"] = 46;
            } else {
              obj["tilemap"] = null;
            }
            */
          }
        },
        {
          "tilemap": null,
          "count": -1,
          "timestamp": 5120,
          "position": {
            "x": 78,
            "y": 106,
            "absolute": false
          },
          "animate": function ({ timestamp }) {
            const obj = this["pitch"]["ball"]["remnants"][1];
            while (obj["timestamp"] < timestamp) {
              if (obj["timestamp"] < 6200) {
                obj["count"] = (obj["count"] + 1);
                if (obj["count"] > 2) {
                  obj["count"] = 0;
                  obj["position"]["x"] += -18;
                  obj["position"]["y"] += -36;
                }
                obj["tilemap"] = [[this["tileset"]["remnants"][obj["count"]]]];
              } else if (obj["timestamp"] > 6200) {
                obj["tilemap"] = null;
              }
              obj["timestamp"] += 120;
            }
            /*
            if (timestamp > 5120 && timestamp < 5480) {
              obj["tilemap"] = [[this["tileset"]["ball"][0]]];
              obj["position"]["x"] = 78;
              obj["position"]["y"] = 106;
            } else if (timestamp > 5480 && timestamp < 5840) {
              obj["tilemap"] = [[this["tileset"]["ball"][0]]];
              obj["position"]["x"] = 60;
              obj["position"]["y"] = 70;
            } else if (timestamp > 5840 && timestamp < 6200) {
              obj["tilemap"] = [[this["tileset"]["ball"][0]]];
              obj["position"]["x"] = 42;
              obj["position"]["y"] = 34;
            } else {
              obj["tilemap"] = null;
            }
              */
          }
        },
        {
          "tilemap": null,
          "count": -1,
          "timestamp": 5240,
          "position": {
            "x": 72,
            "y": 94,
            "absolute": false
          },
          "animate": function ({ timestamp }) {
            const obj = this["pitch"]["ball"]["remnants"][2];
            while (obj["timestamp"] < timestamp) {
              if (obj["timestamp"] < 6320) {
                obj["count"] = (obj["count"] + 1);
                if (obj["count"] > 2) {
                  obj["count"] = 0;
                  obj["position"]["x"] += -18;
                  obj["position"]["y"] += -36;
                }
                obj["tilemap"] = [[this["tileset"]["remnants"][obj["count"]]]];
              } else if (obj["timestamp"] > 6320) {
                obj["tilemap"] = null;
              }
              obj["timestamp"] += 120;
            }
            /*
            if (timestamp > 5240 && timestamp < 5600) {
              obj["tilemap"] = [[this["tileset"]["ball"][0]]];
              obj["position"]["x"] = 72;
              obj["position"]["y"] = 94;
            } else if (timestamp > 5600 && timestamp < 5960) {
              obj["tilemap"] = [[this["tileset"]["ball"][0]]];
              obj["position"]["x"] = 54;
              obj["position"]["y"] = 58;
            } else if (timestamp > 5960 && timestamp < 6320) {
              obj["tilemap"] = [[this["tileset"]["ball"][0]]];
              obj["position"]["x"] = 36;
              obj["position"]["y"] = 22;
            } else {
              obj["tilemap"] = null;
            }
              */
          }
        }
      ],
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
    for (let i = 0; i < this["pitch"]["ball"]["remnants"].length; i++) {
      core.call(this["pitch"]["ball"]["remnants"][i]["animate"], [core]);
    }
    core.screen.draw(this["pitch"]["ball"]["shadow"]);
    for (let i = 0; i < this["pitch"]["ball"]["remnants"].length; i++) {
      core.screen.draw(this["pitch"]["ball"]["remnants"][i]);
    }
    core.screen.draw(this["pitch"]["ball"]);
    // core.call(this["pitch"]["animate"], [core, this["pitch"]["ball"]["shadow1"]]);
    // core.screen.draw(this["pitch"]["ball"]["shadow1"]);
    core.screen.draw(this["pitch"]["player"]);
  }
};
