window.game.initialize = function () {
  this.scx = 0;
  this.scy = 0;

  const { unicode } = this.tileset;
  this.logo = {
    tilemap: [[unicode["N"], unicode["o"], unicode["D"], unicode["M"], unicode["G"], unicode["."], unicode["C"], unicode["O"], unicode["M"]]],
    position: {
      x: 20,
      y: 10,
      absolute: true
    }
  };

  this.initializePitch();

  this.render = this.renderPitch;
  // this.render = this.renderTitle;
};

window.game.animate = function (obj) {
  if (!obj.animation) {
    return;
  }
  if (this.timestamp - obj.animation.sprite.period > obj.animation.sprite.timestamp) {
    obj.animation.sprite.frame = (obj.animation.sprite.frame + 1) % obj.animation.sprite.sheet.length;
    obj.tilemap = obj.animation.sprite.sheet[obj.animation.sprite.frame];
    obj.animation.sprite.timestamp = this.timestamp;
  }
  if (this.timestamp - obj.animation.vertical.period > obj.animation.vertical.timestamp) {
    obj.position.y = obj.position.y + obj.animation.vertical.vector;
    obj.animation.vertical.timestamp = this.timestamp;
  }
  if (obj.animation.shadow) {
    // TODO: fade out shadow instances
    for (let i = obj.animation.shadow.instances.length - 1; i > -1; i--) {
      obj.animation.shadow.instances[i].animation.sprite.frame++;
      if (obj.animation.shadow.instances[i].animation.sprite.frame < obj.animation.shadow.instances[i].animation.sprite.sheet.length) {
        obj.animation.shadow.instances[i].tilemap = obj.animation.shadow.instances[i].animation.sprite.sheet[obj.animation.shadow.instances[i].animation.sprite.frame];
      } else {
        obj.animation.shadow.instances.pop();
      }
    }
    // New shadow
    if (this.timestamp - obj.animation.shadow.period > obj.animation.shadow.timestamp) {
      const shadow = {
        animation: {
          sprite: {
            sheet: obj.animation.shadow.sprite.sheet[obj.animation.sprite.frame],
            frame: 0,
            period: obj.animation.shadow.sprite.period,
            timestamp: this.timestamp
          }
        },
      };
      shadow.tilemap = shadow.animation.sprite.sheet[shadow.animation.sprite.frame];
      shadow.position = { ...obj.position };
      obj.animation.shadow.instances = [ shadow, ...obj.animation.shadow.instances ];
      obj.animation.shadow.timestamp = this.timestamp;
    }
  }
  if (this.timestamp - obj.animation.shadow.sprite.period > obj.animation.shadow.sprite.timestamp) {
  }
};
