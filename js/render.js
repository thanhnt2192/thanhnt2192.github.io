window.game = {
  ...window.game,
  drawImage: function (sx, sy, sWidth, sHeight, dx, dy, horizontalFlip, verticalFlip) {
    this.context.save();
    if (horizontalFlip || verticalFlip) {
      // console.log('flip');
      // this.context.translate(32, 8 * 4 + 8 * 4 + 8 * 4);
      // this.context.scale(-1, -1);
      this.context.translate((horizontalFlip || 0) * sWidth * 4 + 2 * dx * 4, (verticalFlip || 0) * sHeight * 4 + 2 * dy * 4);
      this.context.scale(horizontalFlip || 0 ? -1 : 1, verticalFlip || 0 ? -1 : 1);
    }
    this.context.drawImage(this.img, sx, sy, sWidth, sHeight, dx * 4, dy * 4, sWidth * 4, sHeight * 4);
    this.context.restore();
  },
  render: function (timestamp) {
    const elapsed = timestamp - this.previousTimeStamp;
    if (elapsed > this.fpsInterval) {
      // Get ready for next frame by setting previousTimeStamp=timestamp, but...
      // Also, adjust for fpsInterval not being multiple of 16.67
      this.previousTimeStamp = timestamp - (elapsed % this.fpsInterval);

      // draw background
      this.context.fillStyle = '#00ff00';
      this.context.fillRect(0, 0, 160 * 4, 144 * 4);

      // draw stuff here
      this.player.step++;
      this.processBallAnimation();
      // this.drawPlayer(10, 15, parseInt(this.player.step / 10) % 4);
      this.drawBall(this.ball.x, this.ball.y, this.ball.step);
      // this.drawRedBall(this.ball.x, this.ball.y, this.ball.step);

      this.renderConversationScreen();

      // refresh input
      this.input.mouse.button.press = false;
      this.input.mouse.button.release = false;
    }
    window.requestAnimationFrame(this.render.bind(this));
  },
};
