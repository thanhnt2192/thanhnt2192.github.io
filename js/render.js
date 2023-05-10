window.game = {
  ...window.game,
  drawImage: function (sx, sy, sWidth, sHeight, dx, dy, horizontalFlip, verticalFlip) {
    this.context.save();
    if (horizontalFlip || verticalFlip) {
      // console.log('flip');
      // this.context.translate(32, 8 * 4 + 8 * 4 + 8 * 4);
      // this.context.scale(-1, -1);
      this.context.translate(
        (horizontalFlip || 0) * sWidth * this.scaledResize + 2 * dx * this.scaledResize,
        (verticalFlip || 0) * sHeight * this.scaledResize + 2 * dy * this.scaledResize
      );
      this.context.scale(horizontalFlip || 0 ? -1 : 1, verticalFlip || 0 ? -1 : 1);
    }
    this.context.drawImage(this.img, sx, sy, sWidth, sHeight,
      dx * this.scaledResize, dy * this.scaledResize,
      sWidth * this.scaledResize, sHeight * this.scaledResize);
    this.context.restore();
  },
  drawTile: function (tileKey, sCanvas, dContext, dRow, dColumn, horizontalFlip, verticalFlip) {
    dContext.save();
    if (horizontalFlip || verticalFlip) {
      dContext.translate(
        (horizontalFlip || 0) * 8 + 2 * dColumn * 8,
        (verticalFlip || 0) * 8 + 2 * dRow * 8
      );
    }
    dContext.drawImage(sCanvas, this.tileSheet[tileKey].x, this.tileSheet[tileKey].y, 8, 8, dColumn * 8, dRow * 8, 8, 8);
    dContext.restore();
  },
  drawObject: function () {},
  drawForeground: function () {},
  drawBackground: function () {},
  drawScreen: function () {},
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
  tileSheet: {
    'A': { x: 0, y: 0 },
    'B': { x: 8, y: 0 },
    'C': { x: 16, y: 0 },
    'D': { x: 24, y: 0 },
    'E': { x: 32, y: 0 },
    'F': { x: 40, y: 0 },
    'G': { x: 48, y: 0 },
    'H': { x: 56, y: 0 },
    'I': { x: 64, y: 0 },
    'J': { x: 72, y: 0 },
    'K': { x: 80, y: 0 },
    'L': { x: 88, y: 0 },
    'M': { x: 0, y: 8 },
    'N': { x: 8, y: 8 },
    'O': { x: 16, y: 8 },
    'P': { x: 24, y: 8 },
    'Q': { x: 32, y: 8 },
    'R': { x: 40, y: 8 },
    'S': { x: 48, y: 8 },
    'T': { x: 56, y: 8 },
    'U': { x: 64, y: 8 },
    'V': { x: 72, y: 8 },
    'W': { x: 80, y: 8 },
    'X': { x: 88, y: 8 },
    'Y': { x: 0, y: 16 },
    'Z': { x: 8, y: 16 },
    '1': { x: 16, y: 16 },
    '2': { x: 24, y: 16 },
    '3': { x: 32, y: 16 },
    '4': { x: 40, y: 16 },
    '5': { x: 48, y: 16 },
    '6': { x: 56, y: 16 },
    '7': { x: 64, y: 16 },
    '8': { x: 72, y: 16 },
    '9': { x: 80, y: 16 },
    '0': { x: 88, y: 16 },
    'a': { x: 0, y: 24 },
    'b': { x: 8, y: 24 },
    'c': { x: 16, y: 24 },
    'd': { x: 24, y: 24 },
    'e': { x: 32, y: 24 },
    'f': { x: 40, y: 24 },
    'g': { x: 48, y: 24 },
    'h': { x: 56, y: 24 },
    'i': { x: 64, y: 24 },
    'j': { x: 72, y: 24 },
    'k': { x: 80, y: 24 },
    'l': { x: 88, y: 24 },
    'm': { x: 0, y: 32 },
    'n': { x: 8, y: 32 },
    'o': { x: 16, y: 32 },
    'p': { x: 24, y: 32 },
    'q': { x: 32, y: 32 },
    'r': { x: 40, y: 32 },
    's': { x: 48, y: 32 },
    't': { x: 56, y: 32 },
    'u': { x: 64, y: 32 },
    'v': { x: 72, y: 32 },
    'w': { x: 80, y: 32 },
    'x': { x: 88, y: 32 },
    'y': { x: 0, y: 40 },
    'z': { x: 8, y: 40 },
    '.': { x: 16, y: 40 },
    ',': { x: 24, y: 40 },
    ':': { x: 32, y: 40 },
    ';': { x: 40, y: 40 },
    '…': { x: 48, y: 40 },
    '!': { x: 56, y: 40 },
    '?': { x: 64, y: 40 },
    '(': { x: 72, y: 40 },
    ')': { x: 80, y: 40 },
    ' ': { x: 88, y: 40 }
  }
};
