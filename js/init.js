window.game.render = function () {
  this.scx = 0;
  this.scy = 0;

  const unicode = this.tileset["unicode"];
  this.logo = {
    tilemap: [[unicode["N"], unicode["o"], unicode["D"], unicode["M"], unicode["G"], unicode["."], unicode["C"], unicode["O"], unicode["M"]]],
    position: {
      x: 20,
      y: 10,
      absolute: true
    }
  };

  const { ["conversation"]: conversation } = this.data;
  conversation["initialize"].call(this);
  this.render = conversation["render"].bind(this);
};
