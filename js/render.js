window.game = {
  ...window.game,
  drawForeground: function () {},
  drawBackground: function () {},
  scx: 0,
  scy: 0,
  background: {
    x: 0, y: 0,
    tilemap: []
  },
  drawLayer: function ({ tilemap, x, y }) {
    // Draw to virtualCanvas
    for (let i = 0; i < tilemap.length; i++) {
      for (let j = 0; j < tilemap[i].length; j++) {
        var tile = tilemap[i][j];
        if (tile) {
          this.virtualContext.drawImage(tile, 0, 0, 8, 8, j * 8 + x, i * 8 + y, 8, 8);
        }
      }
    }
  },
  drawScreen: function () {
    this.screenContext.clearRect(0, 0, this.screenWidth * this.scaledResize, this.screenHeight * this.scaledResize);
    this.screenContext.drawImage(this.virtualCanvas, this.scx, this.scy, this.screenWidth, this.screenHeight,
      0, 0, this.screenWidth * this.scaledResize, this.screenHeight * this.scaledResize);
  },
  render: function (timestamp) {
    const elapsed = timestamp - this.previousTimeStamp;
    if (elapsed > this.fpsInterval) {
      // Get ready for next frame by setting previousTimeStamp=timestamp, but...
      // Also, adjust for fpsInterval not being multiple of 16.67
      this.previousTimeStamp = timestamp - (elapsed % this.fpsInterval);

      // clear canvas
      this.virtualContext.clearRect(0, 0, this.backgroundWidth, this.backgroundHeight);

      // draw stuff here
      this.renderScene();

      // draw screen after finish rendering virtual canvas
      this.drawScreen();

      // refresh input
      this.input.mouse.button.press = false;
      this.input.mouse.button.release = false;
      this.input.a.press = false;
      this.input.a.release = false;
    }
    window.requestAnimationFrame(this.render.bind(this));
  }
};
