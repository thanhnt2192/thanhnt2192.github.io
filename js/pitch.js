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
};

window.game.renderPitch = function () {
  const { pitch, player } = this.sprite;

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
};
