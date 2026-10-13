window.app.memory.define("timestamp", 1, 0);

console.log('test');
window.app.script.define("main", function () {
  const elapsed = this.timestamp - this.memory.read(this.index["timestamp"]);
  console.log("elapsed", elapsed);
  this.memory.write(this.index["timestamp"], this.timestamp);
});

window.app.script.activate(window.app.index["main"]);