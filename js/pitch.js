window.game.sprite = {};

window.game.initializePitch = function () {
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
    seconds: 0,
    minute: 0,
    second: 0,
    timestamp: this.timestamp
  };

  this.sprite.pitch = {
    tilemap: [],
    position: {
      x: 0,
      y: 0,
      absolute: false
    }
  };

  // Pitch size: 68m (74 yards) x 105m (115 yards)
  for (let i = 0; i < 88; i++) { // inner size
    this.sprite.pitch.tilemap.push([]);
    for (let j = 0; j < 68; j++) { // inner size
      this.sprite.pitch.tilemap[i].push(lightPlain);
    }
  }

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

  this.script = [
    {
      seconds: 0,
      objects: {
        "0": {
          position: {
            x: 272 - 4,
            y: 352 - 4,
            position: false
          },
          animation: {
            vertical: {
              vector: 1,
              period: 10,
              timestamp: this.timestamp
            }
          }
        },
        "11": {
          tilemap: this.tileset.player.kick[0],
          position: {
            x: 272,
            y: 352 - 16,
            absolute: false
          }
        }
      }
      // sprite: {
      //   sheet: [
      //     this.tileset.player.kick[0]
      //   ],
      //   frame: 0,
      //   period: 10000,
      //   timestamp: this.timestamp
      // },
    },
    {
      seconds: 5,
      objects: {
        "0": {
          tilemap: [[this.tileset.ball[0]]],
          position: {
            x: 272 - 4,
            y: 352 - 4 - 50
          },
          animation: {}
        }
      }
    }
  ];
};

window.game.tic = function () {
  if (this.timestamp > this.timer.timestamp + 100) {
    this.timer.seconds++;
    this.timer.second++;
    if (this.timer.second > 59) {
      this.timer.minute++;
      this.timer.second = 0;
    }
    this.timer.timestamp = this.timer.timestamp + 100;
  }
  this.timer.tilemap[0][0] = this.tileset.unicode[((this.timer.minute - (this.timer.minute % 10)) / 10) + ""];
  this.timer.tilemap[0][1] = this.tileset.unicode[(this.timer.minute % 10) + ""];
  this.timer.tilemap[0][3] = this.tileset.unicode[((this.timer.second - (this.timer.second % 10)) / 10) + ""];
  this.timer.tilemap[0][4] = this.tileset.unicode[(this.timer.second % 10) + ""];
};

window.game.renderPitch = function () {
  this.tic();
  const { pitch, player, ball } = this.sprite;

  player.delay = player.delay + 1;
  if (player.delay > (6 - player.speed)) {
    player.delay = 0;
    player.step = (player.step + 1) % 4;
  }
  player.tilemap = this.tileset.player.run[player.step];
  player.position.x = player.position.x + player.vector.x;
  player.position.y = player.position.y + player.vector.y;
  // player.step = (player.step + 1) % (4 * 10);
  // player.tilemap = this.tileset.player.run[(player.step - (player.step % 10)) / 10]

  this.draw(pitch);
  this.draw(player);

  // if (!ball.animation.sprite.timestamp) {
  //   ball.animation.sprite.timestamp = this.timestamp;
  // }
  // if (!ball.animation.vertical.timestamp) {
  //   ball.animation.vertical.timestamp = this.timestamp;
  // }
  // if (!ball.animation.shadow.timestamp) {
  //   ball.animation.shadow.timestamp = this.timestamp;
  // }
  this.animate(ball);
  // ball.tilemap = [[ball.shadows[9][0]]];
  // ball.position.y = ball.position.y - 20;
  // this.draw(ball);
  // ball.tilemap = [[ball.shadows[6][0]]];
  // ball.position.y = ball.position.y + 10;
  // this.draw(ball);
  // ball.tilemap = [[ball.shadows[3][0]]];
  // ball.position.y = ball.position.y + 10;
  // this.draw(ball);
  // ball.tilemap = [[ball.shadows[0][0]]];
  // ball.position.y = ball.position.y + 10;
  for (const i of this.sprite.ball.animation.shadow.instances) {
    this.draw(i);
  }
  this.draw(ball);
  // ball.position.y = ball.position.y + 1;
  // this.draw(ball);
  // ball.position.y = ball.position.y + 1;
  // this.draw(ball);
  this.draw(this.timer);
};
