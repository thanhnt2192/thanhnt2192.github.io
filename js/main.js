window.app.memory.define("timestamp", 1, 0);
window.app.memory.define("fps_updated_at", 1, 0);
window.app.memory.define("fps_count", 1, 0);
window.app.screen.drawable.define("drawable01");
window.app.screen.drawable.define("drawable02");
window.app.screen.drawable.define("drawable03");

window.app.script.define("main", function () {
  this.screen.drawable.list[this.index["drawable01"]].width = 4;
  this.screen.drawable.list[this.index["drawable01"]].height = 12;
  this.screen.drawable.list[this.index["drawable01"]].x = 300;
  this.screen.drawable.list[this.index["drawable02"]].width = 4;
  this.screen.drawable.list[this.index["drawable02"]].height = 12;
  this.screen.drawable.list[this.index["drawable02"]].x = 306;
  this.screen.drawable.list[this.index["drawable03"]].width = 4;
  this.screen.drawable.list[this.index["drawable03"]].height = 12;
  this.screen.drawable.list[this.index["drawable03"]].x = 312;
  this.script.activate(this.index["fps"]);
});

window.app.script.define("fps", function () {
  const fps = this.memory.read(this.index["fps_count"]);
  this.memory.write(this.index["fps_count"], fps + 1);
  if ((this.timestamp - this.memory.read(this.index["fps_updated_at"])) > 1000) {
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
    this.image.load(this.index["drawable01"], this.index["0"] + n1);
    this.image.load(this.index["drawable02"], this.index["0"] + n2);
    this.image.load(this.index["drawable03"], this.index["0"] + n3);
    this.memory.write(this.index["fps_updated_at"], this.timestamp);
    this.memory.write(this.index["fps_count"], 0);
  }
});
