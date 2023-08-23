window.game.fps = {
  value: 60
};

window.game.screen = {
  width: 160,
  height: 144,
  scale: 4
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
  }
};

window.game.keymap = {
  "87": "up", // W
  "83": "down", // S
  "65": "left", // A
  "68": "right", // D
  "76": "a", // L
  "80": "b" // P
};

window.game.listener = {
  button: {
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
    }
  }
};

window.game.run = function () {
  for (const button of this.button) {
    button.press = false;
    button.release = false;
  }
};

window.game.launch = function (canvas, { document }) {
  this.fps.interval = 1000 / this.fps.value;
  this.screen.context = canvas.getContext("2d");
  this.screen.context.imageSmoothingEnabled = false;
};
