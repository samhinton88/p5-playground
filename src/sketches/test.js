const unPackOptions = (p, options) => {
  Object.keys(options).forEach((prop) => {

    if (Array.isArray(options[prop])) {
      p[prop].apply(p, options[prop])
    } else {
      p[prop](options[prop])
    }
  })
}

const sphere = (p, options, size) => {
  unPackOptions(p, options)

  p.sphere(size);
}

const stillSphereMedium = (p) => (translate) => sphere(p, translate , 100)

export const test = (p) => {
  let rotateX= 0, rotateY= 0, scale = 1, x, y, z;
  let scaled = (scale) => (size) => scale * size;
  let viewScale

  p.setup = function () {
    p.createCanvas(600, 400, p.WEBGL);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotateX){
      rotateX = props.rotateX * Math.PI / 180;
    }

    if (props.rotateY){
      rotateY = props.rotateY * Math.PI / 180;
    }

    if (props.scale){
      scale = props.scale;
    }

    if (props.coords) {
      x = props.coords.x;
      y = props.coords.y;
      z = props.coords.z;
    }
  };

  // const scaled = (scale) => (size) => scale * size;

  // console.log('viewscale 100', viewScale(100))

  p.draw = function () {
    p.background(100);
    // p.noStroke();
    p.push();

    stillSphereMedium(p)({translate: [x, y, z], rotateX, rotateY});

    // sphere(p, { rotateY: rotation, rotateX: 15, translate: [50, -p.height*0.5] }, scale)
    p.pop();
    p.push();
    // sphere(p, { rotateY: rotation, rotateX: 15 }, scale);
    p.pop();
    p.push();
    // sphere(p, { rotateX: rotation, rotateY: rotation, translate: [0, -p.height*0.5]}, scale)

    p.pop();
  };
}

// const sphere = (p) => {
//   p.push();
//   p.translate(0, p.height*0.35);
//   p.rotateY(rotation);
//   p.rotateX(rotation);
//   p.sphere(100 + (Math.sin(rotation) * 10));
//   p.pop();
// }

// const wrapper = (p5object) => (cb) => {

// }

// wrapper(p)(() => {})

// const bigSphere = wrapper(() => )

