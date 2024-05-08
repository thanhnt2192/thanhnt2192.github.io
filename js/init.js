window.app["render"] = function (core) {
  core.call(this["battle"]["initialize"], [core]);
  this.render = this["battle"]["render"];
};
