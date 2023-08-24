window.game.fps = {
  value: 30, // 60
};

window.game.screen = {
  width: 160,
  height: 144
};

window.game.button = {
  up: {
    press: false,
    release: false,
    hold: false
  },
  down: {
    press: false,
    release: false,
    hold: false
  },
  left: {
    press: false,
    release: false,
    hold: false
  },
  right: {
    press: false,
    release: false,
    hold: false
  },
  a: {
    press: false,
    release: false,
    hold: false
  },
  b: {
    press: false,
    release: false,
    hold: false
  },
  press: function (key) {
    const button = this.game.button[key];
    if (button) {
      button.press = true;
      button.hold = true;
    }
  },
  release: function (key) {
    const button = this.game.button[key];
    if (button) {
      button.release = true;
      button.hold = false;
    }
  },
  refresh: function () {
    for (const button of this.button) {
      button.press = false;
      button.release = false;
    }
  }
};

window.game.run = function () {
  this.screen.context.clearRect(0, 0, this.screen.width * this.screen.scale, this.screen.height * this.screen.scale);
};

window.game.initialize = function () {
  this.fps.interval = 1000 / this.fps.value;
  this.screen.context.imageSmoothingEnabled = false;
};
