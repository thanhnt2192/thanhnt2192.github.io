window.app["render"] = function (core) {
  core.call(this["pitch"]["initialize"], [core]);
  this.render = this["pitch"]["render"];
};
