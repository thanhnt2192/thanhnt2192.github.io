window.app["render"] = function (core) {
  core.call(this["arena"]["initialize"], [core]);
  this.render = this["arena"]["render"];
};

window.app["utils"] = {
  "tileset": {
    "clone": function (source) {
      const destination = [];
      for (let i = 0; i < source["length"]; i++) {
        destination[i] = [];
        for (let j = 0; j < source[i]["length"]; j++) {
          destination[i][j] = [];
          for (let k = 0; k < 64; k++) {
            destination[i][j][k * 4 + 0] = source[i][j][k * 4 + 0];
            destination[i][j][k * 4 + 1] = source[i][j][k * 4 + 1];
            destination[i][j][k * 4 + 2] = source[i][j][k * 4 + 2];
            destination[i][j][k * 4 + 3] = source[i][j][k * 4 + 3];
            // if (source[i][j][k * 4] > 0) {
            //   source[i][j][k * 4 + 3] = alphaChannel;
            // }
          }
        }
      }
      return destination;
    }
  }
};
