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
  console.log(this.sprite.pitch.tilemap);
};

window.game.renderPitch = function () {
  const { pitch } = this.sprite;
  this.draw(pitch);
};
