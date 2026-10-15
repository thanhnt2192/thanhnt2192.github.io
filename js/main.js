window.app.memory.define("timestamp", 1, 0);
window.app.memory.define("fps_updated_at", 1, 0);
window.app.memory.define("fps_count", 1, 0);

window.app.script.define("main", function () {
  this.script.activate(this.index["fps"]);
  const elapsed = this.timestamp - this.memory.read(this.index["timestamp"]);
  // console.log("elapsed", elapsed);
  this.memory.write(this.index["timestamp"], this.timestamp);

  if ((this.timestamp - this.memory.read(this.index["fps_updated_at"])) > 1000) {
    const fps = this.div(1000, elapsed);
    const n1 = this.div(fps, 100);
    const n2 = this.div(this.mod(fps, 100), 10);
    const n3 = this.mod(fps, 10);
    // console.log(this.memory.read(this.index["fps_updated_at"]));
    // console.log("m = " + n1 + " n = " + n2);
    console.log("fps = " + fps);
    this.screen.put(this.data.load(this.index[" "]), { x: 300, y: 0 });
    this.screen.put(this.data.load(this.index[" "]), { x: 306, y: 0 });
    this.screen.put(this.data.load(this.index[" "]), { x: 312, y: 0 });
    this.screen.put(this.data.load(this.index["0"] + n1), { x: 300, y: 0 });
    this.screen.put(this.data.load(this.index["0"] + n2), { x: 306, y: 0 });
    this.screen.put(this.data.load(this.index["0"] + n3), { x: 312, y: 0 });
    this.memory.write(this.index["fps_updated_at"], this.timestamp);
  }
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
    console.log("fps = " + fps);
    this.screen.put(this.data.load(this.index[" "]), { x: 300, y: 0 });
    this.screen.put(this.data.load(this.index[" "]), { x: 306, y: 0 });
    this.screen.put(this.data.load(this.index[" "]), { x: 312, y: 0 });
    this.screen.put(this.data.load(this.index["0"] + n1), { x: 300, y: 0 });
    this.screen.put(this.data.load(this.index["0"] + n2), { x: 306, y: 0 });
    this.screen.put(this.data.load(this.index["0"] + n3), { x: 312, y: 0 });
    this.memory.write(this.index["fps_updated_at"], this.timestamp);
    this.memory.write(this.index["fps_count"], 0);
  }
});

// window.app.script.activate(window.app.index["main"]);