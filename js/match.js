window.game = {
  ...window.game,
  spinBall: function () {
    this.ball.frame = ((this.ball.frame || 0) + 1) % (this.tileset.ball.normal.length * this.ball.delay);
    const step = parseInt(this.ball.frame / this.ball.delay);
    this.ball.tilemap = [[this.tileset.ball.normal[step]]];
  },
  renderMatchScene: function () {
    this.spinBall();

    this.drawLayer(this.background);
    this.drawLayer(this.ball);
  }
};
