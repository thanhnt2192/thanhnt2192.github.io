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
  renderConversationScene: function () {
    this.updateConversationText();

    this.drawLayer(this.background);
    this.drawLayer(this.dialog);
  }
};
