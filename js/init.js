window.game["render"] = function (core) {
  const unicode = this.tileset["unicode"];
  this.logo = {
    tilemap: [[unicode["N"], unicode["o"], unicode["D"], unicode["M"], unicode["G"], unicode["."], unicode["C"], unicode["O"], unicode["M"]]],
    position: {
      x: 20,
      y: 10,
      absolute: true
    }
  };

  core.screen.draw(this.logo);
};
