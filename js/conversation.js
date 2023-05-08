window.game = {
  ...window.game,
  story: [
    [
      'Hello',
      'How are you?'
    ],
    [
      'I am fine'
    ]
  ],
  cursorPart: 0,
  cursorRow: 0,
  cursorColumn: 0,
  renderConversationScreen: function () {
    // draw background
    this.context.fillStyle = '#000000';
    this.context.fillRect(0, 0, 160 * this.scaledResize, 144 * this.scaledResize);

    this.drawConversationImage();

    var p = this.story[this.cursorPart];
    if (this.cursorRow < (p.length - 1) || this.cursorColumn < (p[p.length - 1].length - 1)) {
      this.cursorColumn++;
      if (this.cursorColumn >= p[this.cursorRow].length) {
        this.cursorRow++;
        this.cursorColumn = 0;
      }
    } else {
      if (this.input.mouse.button.press) {
        console.log('mouse press');
        if (this.cursorPart < (this.story.length - 1)) {
          this.cursorPart++;
          this.cursorRow = 0;
          this.cursorColumn = 0;
        }
      }
    }
    this.drawConversationText(p, this.cursorRow, this.cursorColumn);
  },
  drawConversationImage: function () {},
  drawConversationText: function (arr, row, col) {
    // Draw text background
    this.context.fillStyle = '#ffffff';
    this.context.fillRect(0, 12 * 8 * 4, 160 * this.scaledResize, 144 * this.scaledResize);

    var str;
    for (var r = 0; r < row; r++) {
      str = arr[r];
      for (var i = 0; i < str.length; i++) {
        this.drawImage(this.characterMapper[str.charAt(i)].x, this.characterMapper[str.charAt(i)].y, 8, 8, i * 8, (13 + r) * 8);
      }
    }
    str = arr[row];
    for (var i = 0; i <= col; i++) {
      this.drawImage(this.characterMapper[str.charAt(i)].x, this.characterMapper[str.charAt(i)].y, 8, 8, i * 8, (13 + row) * 8);
    }
  },
  characterMapper: {
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
