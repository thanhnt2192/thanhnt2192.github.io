window.game = {
  ...window.game,
  fpsInterval: 1000 / 60,
  screenWidth: 160,
  screenHeight: 144,
  scaledResize: 4,
  input: {
    mouse: {
      cursor: {
        x: null,
        y: null
      },
      button: {
        press: false,
        release: false,
        hold: false
      }
    }
  },
  sprites: {},
  dialogFrame: {
    canvas: document.createElement('canvas')
  },
  buildPreset: function () {
    this.sprites.dialogFrame = this.drawSprite([
      [{ row: 0, column: 13 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 13 }],
      [{ row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }],
      [{ row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }],
      [{ row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }],
      [{ row: 0, column: 13 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 12 }, { row: 0, column: 13 }]
    ]);
    this.dialogFrame.canvas.width = 144;
    this.dialogFrame.canvas.height = 5 * 8;
    this.dialogFrame.context = this.dialogFrame.canvas.getContext('2d');
    for (var i = 0; i < 18; i++) {
      this.dialogFrame.context.drawImage(this.img, 8, 0, 8, 8, i * 8, 0, 8, 8);
      this.dialogFrame.context.drawImage(this.img, 8, 0, 8, 8, i * 8, 4 * 8, 8, 8);
    }
    for (var i = 1; i < 4; i++) {
      this.dialogFrame.context.drawImage(this.img, 8, 0, 8, 8, 0, i * 8, 8, 8);
      this.dialogFrame.context.drawImage(this.img, 8, 0, 8, 8, 17 * 8, i * 8, 8, 8);
    }
  },
  launch: function (canvas) {
    this.context = canvas.getContext('2d');
    this.context.imageSmoothingEnabled = false;
    canvas.addEventListener('touchstart', function (e) {
      this.input.mouse.button.press = true;
      this.input.mouse.button.hold = true;
    }.bind(this));
    canvas.addEventListener('touchend', function (e) {
      this.input.mouse.button.press = false;
      this.input.mouse.button.hold = false;
    }.bind(this));
    this.img = new Image();
    // this.img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAIO0lEQVR42u1dO24kNxCtGmwoY9ehncln8B0mWCgxMAqV6AB7BENH0AEmmXAGcLJwsHfwGazMDncEK1y4HHjYYnP4KX66WxJfAQKkYRdrRNaX/UgyPZPQmDjS5rYH+UXEx6siZuYQPzMH+zdtvna7zW132+x2X5tpD7X5+nn6+yciIvruxwf2fU5EdHF4IP5ETDPQyv5+zliJ558g6zlx/78Uf6/kU9J//rocfXbxw5/D70+bS5L7ecZvFTJSa5JHk8vMxMyjdvN5Qkkw+c5Eyz3JyPIXUIKVPan2BIKmp6fNJZ25/5mVYKWMxVEF8XkIEA2Ta0+wO8n2c0sowQoTuIwimEm+ODwsqgTshipn8tXtVt5gP8eoAuIJHzOz3JOYcHA2+RNXByv7fw9Mrqrd9h5m8mH3NJR8IUsnIuJPxEt7AlCnFLNSyXj2LfJ3rQBSoDBvib8bWmEIoAAgKAAICuAG0f3G97uQcn0/wK+J3VLBXyu/O3qnHUT7b74+iCahyhx4sfpvMnGY+MJxe3/7WSxrFPOZ7Dci+03MC0iMP+FBhv4T/EkPUigfZaClAEGGx+1VkE/2G/rw5SYq8LjeGQtvKbuV/O5zgMENnwb7RZD5LqfvBgueOgc4rnfEW/8kpCzHPOda8sC/jsZlftxeiY//uN5lKUuh/O5DgMh+Q3x9IJ8rTrjgwTpDblypRBKSbb4bJVYwK+V3GwKkQdbMjZ5JZfaylHwsBIHedghoYEEyMb8qDMEDlCWBHCvFtJXBxPw8tXxUAaeM26zIxWpzDf+wwrctK/+Wkt+tAjwvphzGA6ocQJff/Vs9gVtaRH7POYA3hjpr9JPnAO47gZlzEHgANyeosCDOSOxCFsxUvvpXJL93D5CyqKktCFi+F7YOwC9cQUEgEAjU3MViX0DHCoB9AUgCQV0rwNKATABC56F3StcJ6sADiOw3XstpaI1RNPEM3gAKnvAA3oELrMmrB95+q3jC/LGreKfnZAH5qAJSIeA0cMVZuP0619PPGRTNnXDDn/EdcuRDAXwDaA965gR4gZkJUOdoO1gM268AdpbIRw4QIsv6NVYXzCMUish8fUi6e6t/aSgfOYDP0jKQOCpEscL6+CRbAq57wPWfrNnE81byoQCu5ct+Q7TeEF/r8HTPFuyFk6kH31U+8334+hC18FbyUQVkunArg48CSyeQNbf8fnKA97efycRlxYDyjBbmk8Ww8IZVQObzc/EXlYEIAXkhILYvQL2IEtycWZgD5PZRK7/rEGDvxLUHrmR7du3AL83fI7kngQiFT+9Q95M4WSS0puB+j+L/I1N+3x7gw5cbezVuWKSpodTJHbFY/f72s3HpMpP8fq3f+cltd3MJ33k92d+n8HyfFvK7qwK0ODoprCJKM3FpVAWgEphpMKYAZEqFAmDSQSAQKCsEYF9AxwqAfQE9rwMQARbevQJACaAAUAIoAAgKAC+AMrAwm5bKLHxp+d0pQHAzhSHn/L3k/oAAKCNr8tz9CRnn/dfI74YMImgEq9Zg8zXXxgyoYlK/jlVtEJlQPnKA2GDaipFAB5Vs0EjyZKCTsEEk0wOwuzEzFDL4+pB1rPzzxsybbB6iMzTyLPJ7VIBoPuBTgkRSNTyTgc8fKWGEbyr53StAq+qBFJOY6lcWkg8FaElLI3KBCK5YOwn8ZPVhY/KU9/69FPldewCJbMrIgWXVKF9oY8cc8rsi761hbs3s1tMZt2+Njn7X3PplP28rgVmEmlg+PIAZbE/NX03/K5Z+f0HpjSGt5HfpAQLHwZQibNz+UnxLy+9aAXIwdJLxjHbSlpaPENB6HWDCwV9aPggEAr3BJLA0Jr9F/q4VAPsCOiGAQlEFBEwoAyH0FvnhAQKDWUJABSMEgF6zAtS60NfO31MVELwvgEgFq67lj2XwxbwF9w10qQDDq+DQSeHOW0Lvq2RjcZHDJqPlpzkUOoJJyH6VnNEHqoDjejecDu4bROd6F9VAmjdxst8Qb+PPHtc74u2Yh6gO158jv2cFiEKuH7dXxNtoRu2FlttgEo1HMn24PAp8Xwv53XuAFJw6BcmOvr9XJmNs8zs8rOCtld93CHAnoCARO0vAnMsmVPz2TV9KD9BUPsrA/Aw9Ogm5g28dD1tNJfJ7Jy8sO+egaKqDdUtlHy1g5d2GAPLlALXn/Wfwe6+sO653pkRVQcNxX0BlCLDvDJh7EI/rnVc+aMYQEDmrX31XgKefErkl7rxUPjyAIc+dAfbv2cmU9rx/310Fzk9NIgglKEigivqwE0bn3P6cxI1mlN8lsaLUq8XiadcRWmH4mmwt77kK4ImUbKmJ0coHgUAg5ACT5QLYF/CKFAD7AnpfBwB1rgC1By0uzd+6n57KwLMBJCoHUyzFj0lvpACNaepDnlDrNwgBUjHA0eVW5R3AxW0KEAmWgxMeYHgX78CobGhWCA08Ol4uxJ9SoAr5o2dj8jV99FgGyr+//Uzf//5rlOHrxzta/fKHz40P+wrsewXciY/cOVAjX0LwcfeIu4z7BvoLAfztkr5+vPMCPx63V/T14x3xt8tohzEgRwpQ0kJ+TAZAJokQIO8e0j46/MwZLt/n9iM7i2rkB4+794UDWH94IKJHrCtP6JSKbVlLy+++CuACpZlSIeeWjzIQ1HcI0NT6Ndu7XwN/1+sApIzBlKrDXzN/9wrg1OrZW7Rc/mE9P3Nrdulp4a3kd6sAz4sph/GAKgfQ5Xf/Vk/glhaRjxzA/WD8Rm7yGJ54A4gcYGoP4AyWVFhQESLXkcdU/gIHiOAG1jA3tg5Yvhe2DsAvXEFBIFAp/Qe+S10SDN63kwAAAABJRU5ErkJggg==';
    this.img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABACAYAAADS1n9/AAAD6klEQVR42u1cu27kMAzMGlumTJn//7KUV17vqwzoCPFN2XQ8Ayyw8EOWKYrkUJQ/PoBH43X8+fr83o//f/7+TI+P0K45zkvnpPaP67TzWh+Pc7NnWtvn+uppn7Y1YM+MWxbvWYe/Pr932mH6gsc1nABoG+Ngae1bBmMm7IgAZkrEtaUpXLA/kX7vVUqw0Q5bXtIi1IwQ74qgMu7O36E0e5kF8LycdcZGhce1bZmhUh9XK1zCEr2umv3/KYAmIM3EZxF1AdVxR3RgJffZGRs12xWdPwSxwmd3xh3dW9oFjJpvjaA1E++d9ZLCed+LKqn1/TRLEH0/AFibB4jwWHrMmwfI5hEq7s/w+MrzbWKAo1Oa79bMJSd47vzq+2dxTVWsE3E13eKDzTLIZ1GpymDsitnlYR9d/P+bmkMuPVodbHkFkA1Cr5zhVKadgr+tmotrs1KanZKCzdLKUttV1kpyOVb50L50sqRbdcKmKhkkCXgU4BnCnMUV3DVW+ttFCbZK4Ywz2Koo9P6ZydQGY3x29vnc/dwAe+UE7g/cMw+g8WhrFtDL47VAMFovYM0TVPS/cxZQTQVbiiKseQIa7HnqCTSl9NQLSPUKXIwR7T+XNOuyaPT2XByhMpwCeXyixa97aKAUbK7O0mlW63QFqFrMySqPZlm0ApMZnZTMsNQHqiCSfLL5kRYWQEtUVA2+dVZaV9OiFFNzMV4XYol5WitAtdn3DH50hlea7Ewb1nu7FoqEq4IzLMEbZWtCz0ThkfjiN7EA4Ol5gJXmsbLN6GKP51kec04t3Kqy9VY0sAPOWou4qg+XKEAkm5f1gVYfK62kZaqGvBSxMrBtSQM1Hl2VCfNm2rRgTWvfQgMrl5DvVvX8XsFbs4miSGbtau7dteBDVQDrDFo9C7LFJqsSMZ6NIZx1iSxTn8oCLLtrq3mwNw8gCdDL8727gzPtVzAZAAAqTPlv3JGcxQYRPBuviH/2xADR+6mPllYsIzHMrH0pRsie197hUho4do7b3Fj1hRBvnmA8Nou0rauJZ0Th3JdPZnsGblMStoInjwKw8nitZHzVihudEFGK2zVPcJoCWItBvDzeqgxVSqA9U9puLlmK2yrA1VuzLDEGd71n///oIi1xCvfxqW5FocDTWcCT8gDZ+MHCQu42q19PGnxp8CLHPErWFe/KL2mumqErhVtZKXTHL4W5dgZlTF2k+vfMoPKpCzWbdf/7nf2clkOg1z4pOjfNbs9XOjUfGRXu1f71t8YAG+XAWlKG7qP3CFATXjTeoNaLS8ZoH3m21gZwMnmS6wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoC/+AVwicf6Mny6FAAAAAElFTkSuQmCC';
    this.img.onload = function () {
      this.buildPreset();

      // Buffer canvas
      const bufferCanvas = document.createElement('canvas');
      bufferCanvas.width = 8;
      bufferCanvas.height = 8;
      const bufferContext = bufferCanvas.getContext('2d');
      bufferContext.drawImage(this.img, 847, 736, 8, 8, 0, 0, 8, 8);
      // Grab the pixel data from the buffer canvas
      const idata = bufferContext.getImageData(0, 0, bufferCanvas.width, bufferCanvas.height);
      const data = idata.data;
      const originalData = data.filter(function () { return true; });
      const paint = function (originalData, data, color, background) {
        // Loop through the pixels, change color
        for (let i = 0; i < data.length; i += 4) {
          const r = originalData[i];
          const g = originalData[i + 1];
          const b = originalData[i + 2];
          const a = originalData[i + 3];
          if (a > 0) {
            // console.log('alpha: ' + a);
            if (r === 0 && g === 0 && b === 0) {
              data[i] = color.r;
              data[i + 1] = color.g;
              data[i + 2] = color.b;
            } else {
              data[i] = background.r;
              data[i + 1] = background.g;
              data[i + 2] = background.b;
            }
          }
        }
      };
      paint(originalData, data, { r: 0, g: 0, b: 197 }, { r: 132, g: 132, b: 255 });
      // Loop through the pixels, change color
      for (let i = 0; i < data.length; i += 4) {
        const r = originalData[i];
        const g = originalData[i + 1];
        const b = originalData[i + 2];
        const a = originalData[i + 3];
        if (a > 0) {
          // console.log('alpha: ' + a);
          if (r === 0 && g === 0 && b === 0) {
            data[i] = 165;
          } else {
            data[i + 1] = 165;
            data[i + 2] = 165;
          }
        }
      }
      bufferContext.putImageData(idata, 0, 0);
      this.bufferCanvas = bufferCanvas;

      console.log('Assets loaded');
      // Start render
      this.previousTimeStamp = performance.now();
      window.requestAnimationFrame(this.render.bind(this));
    }.bind(this);
  }
};
