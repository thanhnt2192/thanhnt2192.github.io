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
