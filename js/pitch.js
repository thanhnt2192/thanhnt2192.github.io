window.game.sprite = {};

window.game.initializePitch = function () {
  this.scx = 272 - 80;
  this.scy = 352 - 72;
  this.scy = 0;
  this.scx = 68 * 8 / 2 - 8 * 11;
  // this.scy = 88 * 8;
  const { unicode, pitch } = this.tileset;
  const { light: { plain: lightPlain } } = pitch;

  this.timer = {
    tilemap: [
      [unicode['0'], unicode['0'], unicode[':'], unicode['0'], unicode['0']]
    ],
    position: {
      x: 0,
      y: 0,
      absolute: true
    },
    minute: 0,
    second: 0,
    timestamp: this.timestamp + 1000, // start after 1000 ms
    half: 1,
    start: { timestamp: 1000 },
    current: { timestamp: 0 }
  };

  // Pitch size: 68m (74 yards) x 105m (115 yards)
  this.pitch = {
    tilemap: [],
    position: {
      x: 0,
      y: 0,
      absolute: false
    },
    grass: {
      tilemap: [],
      position: {
        x: 0,
        y: 0,
        absolute: false
      }
    },
    mark: {
      tilemap: [],
      position: {
        x: 8,
        y: 8 * 4,
        absolute: false
      }
    }
  };

  // TODO: push(pitch.plain.dark);
  for (let i = 0; i < (5 + 88 + 5); i++) {
    this.pitch.grass.tilemap.push([]);
    for (let j = 0; j < (2 + 68 + 2); j++) {
      this.pitch.grass.tilemap[i].push(pitch.plain.light);
    }
  }

  for (let i = 0; i < (1 + 88 + 1); i++) {
    this.pitch.mark.tilemap.push([]);
    for (let j = 0; j < (1 + 68 + 1); j++) {
      this.pitch.mark.tilemap[i].push(null);
    }
  }

  for (let i = 1; i < (88 + 1); i++) {
    this.pitch.mark.tilemap[i][0] = pitch.border.edge.right;
    this.pitch.mark.tilemap[i][1 + 68] = pitch.border.edge.left;
  }
  for (let j = 1; j < (68 + 1); j++) {
    this.pitch.mark.tilemap[0][j] = pitch.border.edge.bottom;
    this.pitch.mark.tilemap[1 + 88][j] = pitch.border.edge.top;
  }
  this.pitch.mark.tilemap[0][0] = pitch.border.end.bottom.left;
  this.pitch.mark.tilemap[0][68 + 1] = pitch.border.end.bottom.right;
  this.pitch.mark.tilemap[88 + 1][0] = pitch.border.end.top.left;
  this.pitch.mark.tilemap[88 + 1][68 + 1] = pitch.border.end.top.right;

  // Corners
  this.pitch.mark.tilemap[1][1] = pitch.corner.top.left;
  this.pitch.mark.tilemap[1][68] = pitch.corner.top.right;
  this.pitch.mark.tilemap[88][1] = pitch.corner.bottom.left;
  this.pitch.mark.tilemap[88][68] = pitch.corner.bottom.right;

  // Penalty
  for (let i = 1; i < 12; i++) {
    this.pitch.mark.tilemap[i][(1 + 68 + 1) / 2 - (26 / 2) + 0] = pitch.border.edge.left;
    this.pitch.mark.tilemap[i][(1 + 68 + 1) / 2 + (26 / 2) - 1] = pitch.border.edge.right;
  }
  this.pitch.mark.tilemap[12][(1 + 68 + 1) / 2 - (26 / 2) + 0] = pitch.border.corner.bottom.left;
  this.pitch.mark.tilemap[12][(1 + 68 + 1) / 2 + (26 / 2) - 1] = pitch.border.corner.bottom.right;
  for (let j = 1; j < (26 - 1); j++) {
    this.pitch.mark.tilemap[12][(1 + 68 + 1) / 2 - (26 / 2) + j] = pitch.border.edge.bottom;
  }
  for (let i = 1; i < 14; i++) {
    this.pitch.mark.tilemap[i][(1 + 68 + 1) / 2 - (32 / 2) + 0] = pitch.border.edge.left;
    this.pitch.mark.tilemap[i][(1 + 68 + 1) / 2 + (32 / 2) - 1] = pitch.border.edge.right;
  }

  // Center line
  for (let j = 1; j < 68 + 1; j++) {
    this.pitch.mark.tilemap[1 + 43][j] = pitch.center.line[0][0];
    this.pitch.mark.tilemap[1 + 44][j] = pitch.center.line[1][0];
  }
  // Center circle
  for (let i = 0; i < pitch.center.circle.length; i++) {
    for (let j = 0; j < pitch.center.circle[i].length; j++) {
      const r = 1 + (88 / 2) - 1 - (pitch.center.circle.length / 2) + 1 + i;
      const c = 1 + (68 / 2) - 1 - (pitch.center.circle[i].length / 2) + 1 + j;
      this.pitch.mark.tilemap[r][c] = pitch.center.circle[i][j];
    }
  }

  this.ball = {
    tilemap: [[this.tileset.ball[0]]],
    position: {
      x: 272 - 4,
      y: 352 - 4,
      absolute: false
    },
    animation: {}
  };

  for (let i = 0; i < 88; i++) { // inner size
    this.pitch.tilemap.push([]);
    for (let j = 0; j < 68; j++) { // inner size
      this.pitch.tilemap[i].push(lightPlain);
    }
  }
  // Center line
  for (let j = 0; j < 68; j++) {
    this.pitch.tilemap[43][j] = this.tileset.pitch.center.line[0][0];
    this.pitch.tilemap[44][j] = this.tileset.pitch.center.line[1][0];
  }
  // Center point
  this.pitch.tilemap[43][33] = this.tileset.pitch.center.point[0][0];
  this.pitch.tilemap[43][34] = this.tileset.pitch.center.point[0][1];
  this.pitch.tilemap[44][33] = this.tileset.pitch.center.point[1][0];
  this.pitch.tilemap[44][34] = this.tileset.pitch.center.point[1][1];

  this.sprite.player = {
    delay: -1,
    step: 0,
    speed: 1,
    vector: {
      x: -1,
      y: 1
    },
    tilemap: this.tileset.player.run[0],
    position: {
      x: 50,
      y: 0,
      absolute: false
    }
  }

  this.sprite.ball = {
    tilemap: [[this.tileset.ball[0]]],
    position: {
      x: 50,
      y: 0,
      absolute: false
    }
  };

  this.sprite.ball.animation = {
    sprite: {
      sheet: [
        [[this.tileset.ball[0]]],
        [[this.tileset.ball[1]]],
        [[this.tileset.ball[2]]]
      ],
      frame: 0,
      loop: true,
      period: 50,
      timestamp: this.timestamp
    },
    shadow: {
      instances: [],
      sprite: {
        sheet: [],
        period: 50,
        timestamp: this.timestamp
      },
      period: 50,
      timestamp: this.timestamp
    },
    horizontal: {
      vector: 0,
      period: 10,
      timestamp: this.timestamp
    },
    vertical: {
      vector: 1,
      period: 5,
      timestamp: this.timestamp
    }
  };

  this.sprite.ball.animation.shadow.sprite.sheet = [
    [], [], []
  ];
  for (let i = 0; i < 10; i++) {
    const shadow = [[...this.tileset.ball[0]], [...this.tileset.ball[1]], [...this.tileset.ball[2]]];
    for (let j = 0; j < 64; j++) {
      for (let s = 0; s < 3; s++) {
        shadow[s][j * 4 + 3] = parseInt(shadow[s][j * 4 + 3] * (10 - i) / 10);
      }
    }
    this.sprite.ball.animation.shadow.sprite.sheet[0].push([[shadow[0]]]);
    this.sprite.ball.animation.shadow.sprite.sheet[1].push([[shadow[1]]]);
    this.sprite.ball.animation.shadow.sprite.sheet[2].push([[shadow[2]]]);
  }
  this.sprite.ball.animation.shadow.instances = [{
    tilemap: this.sprite.ball.tilemap,
    position: { ...this.sprite.ball.position },
    animation: {
      sprite: {
        sheet: this.sprite.ball.animation.shadow.sprite.sheet[this.sprite.ball.animation.sprite.frame],
        frame: 0,
        period: this.sprite.ball.animation.shadow.sprite.period,
        timestamp: this.timestamp
      }
    }
  }];

  this.script = [
    {
      timestamp: 0,
      ball: {
        tilemap: [[this.tileset.ball[0]]],
        position: {
          x: 272 - 4 + 16,
          y: 352 - 4,
          absolute: false
        },
        animation: {
          sprite: {
            sheet: [
              [[this.tileset.ball[0]]],
              [[this.tileset.ball[1]]],
              [[this.tileset.ball[2]]]
            ],
            frame: 0,
            period: 50,
            timestamp: 0
          },
          horizontal: {
            vector: -2,
            period: 10,
            timestamp: 0
          },
          vertical: {
            vector: 2,
            period: 10,
            timestamp: 0
          }
        }
      },
      home: {
        "10": {
          tilemap: this.tileset.player.run[3][0],
          position: {
            absolute: false
          },
          animation: {
            sprite: {
              sheet: this.tileset.player.run[3],
              frame: 0,
              period: 100,
              timestamp: 0
            },
            horizontal: {
              vector: -1,
              period: 10,
              timestamp: 0
            },
            vertical: {
              vector: 1,
              period: 10,
              timestamp: 0
            }
          }
        },
        "2": {
          tilemap: this.tileset.player.run[4][0],
          position: {
            absolute: false
          },
          animation: {
            sprite: {
              sheet: this.tileset.player.run[4],
              frame: 0,
              period: 100,
              timestamp: 0
            },
            vertical: {
              vector: 1,
              period: 10,
              timestamp: 0
            }
          }
        }
      }
    },
    {
      timestamp: 100,
      ball: {
        tilemap: [[this.tileset.ball[0]]],
        position: {
          x: 272 - 4,
          y: 352 - 4,
          absolute: false
        },
        animation: {
          sprite: {
            sheet: [
              [[this.tileset.ball[0]]],
              [[this.tileset.ball[1]]],
              [[this.tileset.ball[2]]]
            ],
            frame: 0,
            period: 50,
            timestamp: 100
          },
          horizontal: {
            vector: -1,
            period: 20,
            timestamp: 100
          },
          vertical: {
            vector: 1,
            period: 20,
            timestamp: 100
          }
        }
      }
    }
  ];

  this.script = [
    {
      timestamp: 0,
      half: 0,
      ball: {
        tilemap: [[this.tileset.ball[0]]],
        position: {
          x: 272 - 4 + 16,
          y: 352 - 4,
          absolute: false
        }
      },
      home: {
        "9": {
          tilemap: this.tileset.player.run[0][0],
          position: {
            x: 272,
            y: 352 - 16,
            absolute: false
          }
        }
      }
    },
    {
      timestamp: 1000,
      half: 1,
      ball: {
        tilemap: [[this.tileset.ball[0]]],
        position: {
          x: 272 - 4 + 16,
          y: 352 - 4,
          absolute: false
        },
        animation: {
          sprite: {
            sheet: [
              [[this.tileset.ball[0]]],
              [[this.tileset.ball[1]]],
              [[this.tileset.ball[2]]]
            ],
            frame: 0,
            period: 50,
            timestamp: 1000
          },
          vertical: {
            vector: -1,
            period: 10,
            timestamp: 1000
          }
        }
      },
      home: {
        "9": {
          tilemap: this.tileset.player.kick[0],
          position: {
            x: 272,
            y: 352 - 16,
            absolute: false
          }
        }
      },
      away: {
      }
    },
    {
      timestamp: 1500,
      half: 1,
      ball: {
        tilemap: [[this.tileset.ball[0]]],
        position: {
          x: 272 - 4 + 16,
          y: 352 - 4 - 50
        },
        animation: {}
      },
      home: {
        "9": {
          tilemap: this.tileset.player.kick[0],
          position: {
            x: 272,
            y: 352 - 16,
            absolute: false
          }
        }
      },
    }
  ];
};

window.game.tic = function () {
  if (this.timestamp < this.timer.timestamp) {
    return;
  }
  this.timer.current.timestamp += this.timestamp - this.timer.timestamp;
  this.timer.timestamp = this.timestamp;
  const t = this.timer.current.timestamp - this.timer.start.timestamp;
  if (t > 0) {
    if (this.timer.half > 0 && t < (45 * 60 * 1000)) {
      this.timer.minute = ((this.timer.half - 1) * 45) + parseInt(t * 10 / (60 * 1000));
      this.timer.second = parseInt((t * 10 % (60 * 1000)) / 1000);
    } else {
      this.timer.minute = this.timer.half * 45;
      this.timer.second = 0;
    }
  }
  while (this.script.length && this.script[0].timestamp <= this.timer.current.timestamp) {
    const a = this.script.shift();
    if (a.half > this.timer.half) {
      this.timer.half = a.half;
      this.timer.start.timestamp = a.timestamp;
    }
    this.ball = a.ball;
    this.home = a.home;
  }
  this.timer.tilemap[0][0] = this.tileset.unicode[((this.timer.minute - (this.timer.minute % 10)) / 10) + ""];
  this.timer.tilemap[0][1] = this.tileset.unicode[(this.timer.minute % 10) + ""];
  this.timer.tilemap[0][3] = this.tileset.unicode[((this.timer.second - (this.timer.second % 10)) / 10) + ""];
  this.timer.tilemap[0][4] = this.tileset.unicode[(this.timer.second % 10) + ""];
};

window.game.renderPitch = function () {
  const { pitch, ball, home } = this;
  this.tic();
  this.draw(pitch.grass);
  this.draw(pitch.mark);
  this.draw(ball); // TODO: draw shadow (ghost, remnants)
  this.animate(ball, this.timer.current.timestamp);
  this.draw(ball);
  for (const n in home) {
    this.draw(home[n]);
  }
  // const { player, ball } = this.sprite;

  // player.delay = player.delay + 1;
  // if (player.delay > (6 - player.speed)) {
  //   player.delay = 0;
  //   player.step = (player.step + 1) % 4;
  // }
  // player.tilemap = this.tileset.player.run[player.step];
  // player.position.x = player.position.x + player.vector.x;
  // player.position.y = player.position.y + player.vector.y;
  // player.step = (player.step + 1) % (4 * 10);
  // player.tilemap = this.tileset.player.run[(player.step - (player.step % 10)) / 10]

  // this.draw(player);

  // this.animate(ball);
  // for (const i of this.sprite.ball.animation.shadow.instances) {
  //   this.draw(i);
  // }
  // this.draw(ball);
  this.draw(this.timer);
};
