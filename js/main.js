window.app.script.define("main", function () {
  this.memory[1][this.index["fps"]].width = 16;
  this.memory[1][this.index["fps"]].height = 12;
  this.memory[1][this.index["fps"]].x = 300;
  this.script.activate(this.index["function_fps"]);
});

window.app.script.define("test", function () {
  this.image.load(this.index["0"], this.index["fps"], 0, 0);
  this.image.load(this.index["0"], this.index["fps"], 6, 0);
  this.image.load(this.index["0"], this.index["fps"], 12, 0);
});

window.app.script.define("function_fps", function () {
  const fps = this.memory[0][this.index["fps_count"]];
  this.memory[0][this.index["fps_count"]] = fps + 1;
  if ((this.timestamp - this.memory[0][this.index["fps_updated_at"]]) > 1000) {
    const n1 = this.div(fps, 100);
    const n2 = this.div(this.mod(fps, 100), 10);
    const n3 = this.mod(fps, 10);
    // console.log(this.memory.read(this.index["fps_updated_at"]));
    // console.log("m = " + n1 + " n = " + n2);
    // console.log("fps = " + fps);
    // this.screen.put(this.data.load(this.index[" "]), { x: 300, y: 0 });
    // this.screen.put(this.data.load(this.index[" "]), { x: 306, y: 0 });
    // this.screen.put(this.data.load(this.index[" "]), { x: 312, y: 0 });
    // this.screen.put(this.data.load(this.index["0"] + n1), { x: 300, y: 0 });
    // this.screen.put(this.data.load(this.index["0"] + n2), { x: 306, y: 0 });
    // this.screen.put(this.data.load(this.index["0"] + n3), { x: 312, y: 0 });
    // this.image.load(this.index["fps"], this.index["0"] + n1);
    // this.image.load(this.index["drawable02"], this.index["0"] + n2);
    // this.image.load(this.index["drawable03"], this.index["0"] + n3);
    this.image.load(this.index["0"] + n1, this.index["fps"], 0, 0);
    this.image.load(this.index["0"] + n2, this.index["fps"], 6, 0);
    this.image.load(this.index["0"] + n3, this.index["fps"], 12, 0);
    this.memory[0][this.index["fps_updated_at"]] = this.timestamp;
    this.memory[0][this.index["fps_count"]] = 0;
  }
});
