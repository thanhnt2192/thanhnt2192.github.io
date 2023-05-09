window.game = {
  ...window.game,
  fpsInterval: 1000 / 60,
  screenWidth: 160,
  screenHeight: 144,
  scaledResize: 4,
  input: {
    mouse: {
      cursor: {
        x: null,
        y: null
      },
      button: {
        press: false,
        release: false,
        hold: false
      }
    }
  },
  dialogFrame: {
    canvas: document.createElement('canvas')
  },
  buildPreset: function () {
    this.dialogFrame.canvas.width = 144;
    this.dialogFrame.canvas.height = 5 * 8;
    this.dialogFrame.context = this.dialogFrame.canvas.getContext('2d');
    for (var i = 0; i < 18; i++) {
      this.dialogFrame.context.drawImage(this.img, 8, 0, 8, 8, i * 8, 0, 8, 8);
      this.dialogFrame.context.drawImage(this.img, 8, 0, 8, 8, i * 8, 4 * 8, 8, 8);
    }
    for (var i = 1; i < 4; i++) {
      this.dialogFrame.context.drawImage(this.img, 8, 0, 8, 8, 0, i * 8, 8, 8);
      this.dialogFrame.context.drawImage(this.img, 8, 0, 8, 8, 17 * 8, i * 8, 8, 8);
    }
  },
  launch: function (canvas) {
    this.context = canvas.getContext('2d');
    this.context.imageSmoothingEnabled = false;
    canvas.addEventListener('touchstart', function (e) {
      this.input.mouse.button.press = true;
      this.input.mouse.button.hold = true;
    }.bind(this));
    canvas.addEventListener('touchend', function (e) {
      this.input.mouse.button.press = false;
      this.input.mouse.button.hold = false;
    }.bind(this));
    this.img = new Image();
    // this.img.src = 'data:image/png;base64,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';
    this.img.src = 'data:image/png;base64,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';
    this.img.onload = function () {
      // Buffer canvas
      const bufferCanvas = document.createElement('canvas');
      bufferCanvas.width = 8;
      bufferCanvas.height = 8;
      const bufferContext = bufferCanvas.getContext('2d');
      bufferContext.drawImage(this.img, 847, 736, 8, 8, 0, 0, 8, 8);
      // Grab the pixel data from the buffer canvas
      const idata = bufferContext.getImageData(0, 0, bufferCanvas.width, bufferCanvas.height);
      const data = idata.data;
      const originalData = data.filter(function () { return true; });
      const paint = function (originalData, data, color, background) {
        // Loop through the pixels, change color
        for (let i = 0; i < data.length; i += 4) {
          const r = originalData[i];
          const g = originalData[i + 1];
          const b = originalData[i + 2];
          const a = originalData[i + 3];
          if (a > 0) {
            // console.log('alpha: ' + a);
            if (r === 0 && g === 0 && b === 0) {
              data[i] = color.r;
              data[i + 1] = color.g;
              data[i + 2] = color.b;
            } else {
              data[i] = background.r;
              data[i + 1] = background.g;
              data[i + 2] = background.b;
            }
          }
        }
      };
      paint(originalData, data, { r: 0, g: 0, b: 197 }, { r: 132, g: 132, b: 255 });
      // Loop through the pixels, change color
      for (let i = 0; i < data.length; i += 4) {
        const r = originalData[i];
        const g = originalData[i + 1];
        const b = originalData[i + 2];
        const a = originalData[i + 3];
        if (a > 0) {
          // console.log('alpha: ' + a);
          if (r === 0 && g === 0 && b === 0) {
            data[i] = 165;
          } else {
            data[i + 1] = 165;
            data[i + 2] = 165;
          }
        }
      }
      bufferContext.putImageData(idata, 0, 0);
      this.bufferCanvas = bufferCanvas;

      console.log('Assets loaded');
      // Start render
      this.previousTimeStamp = performance.now();
      window.requestAnimationFrame(this.render.bind(this));
    }.bind(this);
  }
};
