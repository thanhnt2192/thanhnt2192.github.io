window.game = {
  ...window.game,
  story: [
    [
      'Hello',
      'How are you?'
    ],
    [
      "I'm fine"
    ]
  ],
  cursorPart: 0,
  cursorRow: 0,
  cursorColumn: -1,
  cursorDelay: 0,
  updateEffectBackground: function () {
    for (i = 0; i < 13; i++) {
      for (j = 0; j < 19; j++) {
        this.background.tilemap[i][j] = this.background.tilemap[i][j + 1];
      }
      this.background.tilemap[i][19] = this.background.tilemap[i][0];
    }
  },
  updateConversationText: function () {
    if (this.cursorColumn < (this.story[this.cursorPart][this.cursorRow].length - 1)) {
      if (this.cursorDelay < 2) {
        this.cursorDelay++;
        return;
      }
      this.cursorDelay = 0;
      this.cursorColumn++;
    } else {
      if (this.cursorRow < (this.story[this.cursorPart].length - 1)) {
        this.cursorRow++;
        this.cursorColumn = -1;
      } else {
        if (this.input.a.press) {
          console.log('mouse press');
          if (this.cursorPart < (this.story.length - 1)) {
            // clear old part
            for (let i = 1; i < 19; i++) {
              this.dialog.tilemap[1][i] = null;
              this.dialog.tilemap[3][i] = null;
            }
            this.cursorPart++;
            this.cursorRow = 0;
            this.cursorColumn = -1;
          }
        }
      }
    }
    if (this.cursorColumn >= 0) {
      this.dialog.tilemap[1 + this.cursorRow * 2][1 + this.cursorColumn] = this.tileset.unicode[this.story[this.cursorPart][this.cursorRow][this.cursorColumn]];
    }
  },
  updatePlayerRunA: function () {
    const run = this.tileset.player.run;
    this.player.a.frame = ((this.player.a.frame || 0) + 1) % (4 * this.player.a.delay);
    const step = parseInt(this.player.a.frame / this.player.a.delay);
    this.player.a.tilemap = [
      [run[step].top.left, run[step].top.right],
      [run[step].middle.left, run[step].middle.right],
      [run[step].bottom.left, run[step].bottom.right]
    ];
  },
  renderConversationScene: function () {
    this.updateEffectBackground();
    this.updateConversationText();
    this.updatePlayerRunA();

    this.drawLayer(this.player.a);
    this.drawLayer(this.background);
    this.drawLayer(this.dialog);
  }
};
