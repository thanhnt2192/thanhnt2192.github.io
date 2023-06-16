window.game = {
  ...window.game,
  initialize: function () {
    const { white } = this.tileset;
    this.background = {
      x: 0, y: 0,
      tilemap: [
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, null, null, null, null, null, null, null, null, null, null, null, null],
        [white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, null, null, null, null, null, null, null, null, null, null, null, null],
        [white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, null, null, null, null, null, null, null, null, null, null, null, null],
        [white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, null, null, null, null, null, null, null, null, null, null, null, null],
        [white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, white, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
      ]
    };
    const { border, corner, player } = this.tileset;
    this.dialog = {
      x: 0, y: 104,
      tilemap: [
        [corner.top.left, border.top, border.top, border.top, border.top, border.top, border.top, border.top, border.top, border.top, border.top, border.top, border.top, border.top, border.top, border.top, border.top, border.top, border.top, corner.top.right],
        [border.left, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, border.right],
        [border.left, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, border.right],
        [border.left, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, border.right],
        [corner.bottom.left, border.bottom, border.bottom, border.bottom, border.bottom, border.bottom, border.bottom, border.bottom, border.bottom, border.bottom, border.bottom, border.bottom, border.bottom, border.bottom, border.bottom, border.bottom, border.bottom, border.bottom, border.bottom, corner.bottom.right]
      ]
    };
    const { run } = player;
    this.player = {
      a: {
        x: 16, y: 8,
        delay: 10,
        tilemap: [
          [run[0].top.left, run[0].top.right],
          [run[0].middle.left, run[0].middle.right],
          [run[0].bottom.left, run[0].bottom.right]
        ]
      }
    }

    this.renderScene = this.renderConversationScene;
  }
};
