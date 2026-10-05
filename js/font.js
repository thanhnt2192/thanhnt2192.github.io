console.log('load font');
window.app.font = {
  "A": window.app.loadImage({
    "width": 4,
    "height": 12,
    "data": {
      "000000": [
        0, 0, 0, 0,
        0, 0, 1, 0,
        0, 1, 0, 1,
        0, 1, 0, 1,
        1, 0, 0, 1,
        1, 0, 0, 1,
        1, 1, 1, 1,
        1, 0, 0, 1,
        1, 0, 0, 1,
        1, 0, 0, 1,
        1, 0, 0, 1,
        1, 0, 0, 1
      ]
    }
  })
};
