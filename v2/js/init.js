window.game.render = function () {
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

window.game.animate = function (obj, timestamp) {
  if (!obj.animation) {
    return;
  }
  if (timestamp === undefined) {
    timestamp = this.timestamp;
  }
  let remain = true;
  while (remain) {
    remain = false;
    let t = timestamp;
    if (obj.animation.sprite && t > obj.animation.sprite.timestamp + obj.animation.sprite.period) {
      t = obj.animation.sprite.timestamp + obj.animation.sprite.period + 1;
    }
    if (obj.animation.vertical && t > obj.animation.vertical.timestamp + obj.animation.vertical.period) {
      t = obj.animation.vertical.timestamp + obj.animation.vertical.period + 1;
    }
    if (obj.animation.horizontal && t > obj.animation.horizontal.timestamp + obj.animation.horizontal.period) {
      t = obj.animation.horizontal.timestamp + obj.animation.horizontal.period + 1;
    }
    if (obj.animation.sprite && t > obj.animation.sprite.timestamp + obj.animation.sprite.period) {
      obj.animation.sprite.frame = (obj.animation.sprite.frame + 1) % obj.animation.sprite.sheet.length;
      obj.tilemap = obj.animation.sprite.sheet[obj.animation.sprite.frame];
      obj.animation.sprite.timestamp += obj.animation.sprite.period;
      remain = true;
    }
    if (obj.animation.vertical && t > obj.animation.vertical.timestamp + obj.animation.vertical.period) {
      obj.position.y = obj.position.y + obj.animation.vertical.vector;
      obj.animation.vertical.timestamp += obj.animation.vertical.period;
      remain = true;
    }
    if (obj.animation.horizontal && t > obj.animation.horizontal.timestamp + obj.animation.horizontal.period) {
      obj.position.y = obj.position.y + obj.animation.horizontal.vector;
      obj.animation.horizontal.timestamp += obj.animation.horizontal.period;
      remain = true;
    }
    if (obj.animation.shadow) {
      // Fade out shadow instances
      for (let i = obj.animation.shadow.instances.length - 1; i > -1; i--) {
        if (t > obj.animation.shadow.instances[i].animation.sprite.timestamp + obj.animation.shadow.instances[i].animation.sprite.period) {
          obj.animation.shadow.instances[i].animation.sprite.frame++;
          obj.animation.shadow.instances[i].animation.sprite.timestamp += obj.animation.shadow.instances[i].animation.sprite.period;
          if (obj.animation.shadow.instances[i].animation.sprite.frame < obj.animation.shadow.instances[i].animation.sprite.sheet.length) {
            obj.animation.shadow.instances[i].tilemap = obj.animation.shadow.instances[i].animation.sprite.sheet[obj.animation.shadow.instances[i].animation.sprite.frame];
          } else {
            obj.animation.shadow.instances.pop();
          }
        }
      }
      // New shadow
      if (t - obj.animation.shadow.period > obj.animation.shadow.timestamp) {
        obj.animation.shadow.timestamp += obj.animation.shadow.period;
        const shadow = {
          animation: {
            sprite: {
              sheet: obj.animation.shadow.sprite.sheet[obj.animation.sprite.frame],
              frame: 0,
              period: obj.animation.shadow.sprite.period,
              timestamp: obj.animation.shadow.timestamp
            }
          },
        };
        shadow.tilemap = shadow.animation.sprite.sheet[shadow.animation.sprite.frame];
        shadow.position = { ...obj.position };
        obj.animation.shadow.instances = [ shadow, ...obj.animation.shadow.instances ];
        remain = true;
      }
    }
  }
};
