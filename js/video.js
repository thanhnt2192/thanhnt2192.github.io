window.game = {
  ...window.game,
  tiles: {},
  images: {
    "border-top": [
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      [[0, 0, 0, 255], [0, 0, 0, 255], [0, 0, 0, 255], [0, 0, 0, 255], [0, 0, 0, 255], [0, 0, 0, 255], [0, 0, 0, 255], [0, 0, 0, 255]],
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      [[0, 0, 0, 255], [0, 0, 0, 255], [0, 0, 0, 255], [0, 0, 0, 255], [0, 0, 0, 255], [0, 0, 0, 255], [0, 0, 0, 255], [0, 0, 0, 255]],
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    ]
  },
  loadTiles: function () {
    const object = {
      "border-top": [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ]
    };
    for (const property in object) {
      const bufferCanvas = document.createElement("canvas");
      bufferCanvas.width = 8;
      bufferCanvas.height = 8;
      const bufferContext = bufferCanvas.getContext("2d");
      const imageData = bufferContext.createImageData(8, 8);

      // Iterate through every pixel
      for (let i = 0; i < imageData.data.length; i += 4) {
        // Modify pixel data
        imageData.data[i + 0] = object[property][i + 0]; // R value
        imageData.data[i + 1] = object[property][i + 1]; // G value
        imageData.data[i + 2] = object[property][i + 2]; // B value
        imageData.data[i + 3] = object[property][i + 3]; // A value
      }

      // Draw image data to the canvas
      bufferContext.putImageData(imageData, 0, 0);

      this.tiles[property] = bufferCanvas;
    }
  },
  loadSprites: function () {
    const object = {
      "dialog-frame": [
        [null, "border-top", "border-top", "border-top", "border-top", "border-top", "border-top", "border-top", "border-top", "border-top", "border-top", "border-top", "border-top", "border-top", "border-top", "border-top", "border-top", "border-top", "border-top", null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, "border-top", "border-top", "border-top", "border-top", "border-top", "border-top", "border-top", "border-top", "border-top", "border-top", "border-top", "border-top", "border-top", "border-top", "border-top", "border-top", "border-top", "border-top", null]
      ]
    };
    const property = "dialog-frame";
    var spriteCanvas = document.createElement("canvas");
    var spriteContext = spriteCanvas.getContext("2d");
    spriteCanvas.width = 20 * 8;
    spriteCanvas.height = 5 * 8;
    var tileMap = object[property];
    for (var i = 0; i < tileMap.length; i++) {
      for (var j = 0; j < tileMap[i].length; j++) {
        var tile = tileMap[i][j];
        if (tile) {
          spriteContext.drawImage(this.tiles[tile], 0, 0, 8, 8, j * 8, i * 8, 8, 8);
        }
      }
    }
    this.sprites[property] = spriteCanvas;
  }
};
