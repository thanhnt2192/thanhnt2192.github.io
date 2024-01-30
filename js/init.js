window.game["scroll"] = { "x": 0, "y": 0 };

window.game["render"] = function ({ draw, scroll, call, bind, input }) {
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
  this.call(conversation["initialize"]);
  this.render = this.bind(conversation["render"]);
};
