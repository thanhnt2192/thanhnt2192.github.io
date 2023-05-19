window.game = {
  ...window.game,
  fpsInterval: 1000 / 60,
  backgroundWidth: 256,
  backgroundHeight: 256,
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
  // TODO: use Object.defineProperty to prevent changing core functions
  launch: function (canvas) {
    this.screenContext = canvas.getContext('2d');
    this.screenContext.imageSmoothingEnabled = false;
    canvas.addEventListener('touchstart', function (e) {
      this.input.mouse.button.press = true;
      this.input.mouse.button.hold = true;
    }.bind(this));
    canvas.addEventListener('touchend', function (e) {
      this.input.mouse.button.press = false;
      this.input.mouse.button.hold = false;
    }.bind(this));

    this.virtualCanvas = document.createElement("canvas");
    this.virtualCanvas.width = this.backgroundWidth;
    this.virtualCanvas.height = this.backgroundHeight;
    this.virtualContext = this.virtualCanvas.getContext("2d");

    this.loadTiles();
    this.loadConversationActivity();

    // Start render
    this.previousTimeStamp = performance.now();
    window.requestAnimationFrame(this.render.bind(this));
  }
};
