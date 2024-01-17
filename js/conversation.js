window.game.initializeConversation = function () {
  this.scx = 0;
  this.scy = 0;
  this.balls = [
    {
      tilemap: [[this.tileset.ball]],
      position: {
        x: 0,
        y: 0,
        absolute: false
      }
    }
  ];
};

window.game.renderConversation = function () {
  const { dialog } = this.data;
  const { unicode } = this.tileset;
  if (this.input.a.press) {
    dialog.cursor++;
    let line = dialog.script[dialog.cursor][0];
    for (let i = 0; i < line.length; i++) {
      dialog.tilemap[1][1 + i] = unicode[line[i]];
    }
  }
};
