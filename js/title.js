window.game.renderTitle = function () {
  this.draw(this.logo);
};

window.game.initialize = function () {
  const { unicode } = this.tileset;
  this.logo = {
    tilemap: [[unicode["N"]]],
    position: {
      x: 20,
      y: 10,
      absolute: true
    }
  };

  this.render = this.renderTitle;
};
