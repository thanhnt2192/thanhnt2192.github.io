window.app.script.define("main", function () {
  this.graphics[this.index["fps"]].width = 16;
  this.graphics[this.index["fps"]].height = 12;
  this.graphics[this.index["fps"]].x = 300;
  this.script.activate(this.index["function_fps"]);
});

window.app.script.define("test", function () {
  this.image.load(this.index["0"], this.index["fps"], 0, 0);
  this.image.load(this.index["0"], this.index["fps"], 6, 0);
  this.image.load(this.index["0"], this.index["fps"], 12, 0);
});

window.app.script.define("function_fps", function () {
  const fps = this.memory[this.index["fps_count"]];
  this.memory[this.index["fps_count"]] = fps + 1;
  if ((this.timestamp - this.memory[this.index["fps_updated_at"]]) > 1000) {
    const n1 = this.div(fps, 100);
    const n2 = this.div(this.mod(fps, 100), 10);
    const n3 = this.mod(fps, 10);
    this.image.load(this.index["0"] + n1, this.index["fps"], 0, 0);
    this.image.load(this.index["0"] + n2, this.index["fps"], 6, 0);
    this.image.load(this.index["0"] + n3, this.index["fps"], 12, 0);
    this.memory[this.index["fps_updated_at"]] = this.timestamp;
    this.memory[this.index["fps_count"]] = 0;
  }
});
