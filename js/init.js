window.game.initialize = function () {
  this.scx = 0;
  this.scy = 0;

  const { unicode } = this.tileset;
  this.logo = {
    tilemap: [[unicode["N"], unicode["o"], unicode["D"], unicode["M"], unicode["G"], unicode["."], unicode["C"], unicode["O"], unicode["M"]]],
    position: {
      x: 20,
      y: 10,
      absolute: true
    }
  };

  this.initializePitch();

  this.render = this.renderPitch;
  // this.render = this.renderTitle;
};

window.game.animate = function (obj) {
  if (this.timestamp - obj.animation.sprite.period > obj.animation.sprite.timestamp) {
    obj.animation.sprite.frame = (obj.animation.sprite.frame + 1) % obj.animation.sprite.sheet.length;
    obj.tilemap = obj.animation.sprite.sheet[obj.animation.sprite.frame];
    obj.animation.sprite.timestamp = this.timestamp;
  }
  if (this.timestamp - obj.animation.vertical.period > obj.animation.vertical.timestamp) {
    obj.position.y = obj.position.y + obj.animation.vertical.vector;
    obj.animation.vertical.timestamp = this.timestamp;
  }
};
