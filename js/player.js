window.game = {
  ...window.game,
  drawPlayer: function (dx, dy, step) {
    // this.drawImage(0 + step * 16, 144, 16, 24, dx, dy);
    this.drawImage(776 + step * 16, 200, 16, 24, dx, dy);
  },
  player: {
    step: 0
  },
};
