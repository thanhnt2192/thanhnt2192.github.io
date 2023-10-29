window.game.sprite = {};

window.game.initializePitch = function () {
  const { pitch } = this.tileset;
  const { light: { plain: lightPlain } } = pitch;

  this.sprite.pitch = {
    tilemap: [],
    position: {
      x: 0,
      y: 0,
      absolute: false
    }
  };

  for (let i = 0; i < 115; i++) {
    this.sprite.pitch.tilemap.push([]);
    for (let j = 0; j < 74; j++) {
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
  /*
  this.sprite.ball.shadows = [];
  for (let i = 0; i < 10; i++) {
    const shadow = {
      tileset: [[...this.tileset.ball[0]], [...this.tileset.ball[1]], [...this.tileset.ball[2]]],
      tilemap: [],
      position: { ...this.sprite.ball.position }
    };
    for (let j = 0; j < 64; j++) {
      for (let s = 0; s < 3; s++) {
        shadow.tileset[s][j * 4 + 3] = parseInt(shadow.tileset[s][j * 4 + 3] * (10 - i) / 10);
      }
    }
    this.sprite.ball.shadows.push(shadow);
  }
  */
  // this.sprite.ball.tilemap = [[this.sprite.ball.shadows[0][0]]];

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
      period: 50
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
    const tileset = [
      [[shadow[0]]],
      [[shadow[1]]],
      [[shadow[2]]]
    ];
    this.sprite.ball.animation.shadow.sprite.sheet[0].push([[shadow[0]]]);
    this.sprite.ball.animation.shadow.sprite.sheet[1].push([[shadow[1]]]);
    this.sprite.ball.animation.shadow.sprite.sheet[2].push([[shadow[2]]]);
    // this.sprite.ball.animation.shadow.sprite.sheet.push(tileset);
  }
};

window.game.renderPitch = function () {
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

  if (!ball.animation.sprite.timestamp) {
    ball.animation.sprite.timestamp = this.timestamp;
  }
  if (!ball.animation.vertical.timestamp) {
    ball.animation.vertical.timestamp = this.timestamp;
  }
  if (!ball.animation.shadow.timestamp) {
    ball.animation.shadow.timestamp = this.timestamp;
  }
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
};
