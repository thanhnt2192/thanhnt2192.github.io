window.game = {
  ...window.game,
  drawBall: function (dx, dy, step) {
    // this.drawImage(step * 8, 0, 8, 8, dx, dy);
    for (const s of this.ball.streams) {
      if (s.width > 0) {
        this.drawImage(96, 0, 8, 8, s.x, s.y);
      }
    }
    this.drawImage(88, 0, 8, 8, 0, 0);
    this.drawImage(104, 0, 8, 8, 8, 0);
    this.drawImage(104, 0, 8, 8, 0, 8, 1, 1);
    this.drawImage(96, 0, 8, 8, 8, 8);
    this.drawImage(104, 0, 8, 8, 16, 8);
    this.drawImage(104, 0, 8, 8, 8, 16, 1, 1);
    this.drawImage(88, 0, 8, 8, 16, 16, 1, 1);
    this.drawImage(0, 0, 8, 8, 16, 16);
  },
  drawRedBall: function (dx, dy, step) {
    this.context.drawImage(this.bufferCanvas, 0, 0, 8, 8, dx * 4, dy * 4, 8 * 4, 8 * 4);
  },
  processBallAnimation: function () {
    this.ball.frameCount++;
    if (this.ball.frameCount < 1) return;
    this.ball.frameCount = 0;
    if (this.ball.x < this.ball.dx) {
      this.ball.x += this.ball.speed;
    } 
    if (this.ball.x > this.ball.dx)  {
      this.ball.x -= this.ball.speed;
    }
  },
  processShootingBallAnimation: function () {
    if (this.ball.frame === 1) {
      this.ball.x += 8;
    }
  },
  ball: {
    x: 0,
    y: 0,
    dx: 100,
    dy: 0,
    speed: 1,
    spin: 0,
    step: 0,
    frameCount: 0,
    streams: [
      { x: 94, y: 0, width: 1 },
      { x: 0, y: 0, width: 0 },
      { x: 0, y: 0, width: 0 },
      { x: 0, y: 0, width: 0 },
      { x: 0, y: 0, width: 0 }
    ]
  },
};
