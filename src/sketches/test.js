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
  let rotateX= 0, rotateY= 0, scale = 1, x, y, z, xLightPos, yLightPos;
  let scaled = (scale) => (size) => scale * size;
  let viewScale

  p.setup = function () {
    p.createCanvas(700, 400, p.WEBGL);
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

    if (props.xLightPos && props.yLightPos) {
      xLightPos = props.xLightPos;
      yLightPos = props.yLightPos;
    }
  };


  p.draw = function () {
    const  dirX = (p.mouseX - p.width  / 2) ;
    const  dirY = (p.mouseY - p.height / 2) ;

    p.background(50);
    p.pointLight(254, 254, 254, -xLightPos, -yLightPos, 1);
    p.ambientLight(200)

    p.ambientMaterial(250)
    p.push();
    
    stillSphereMedium(p)({translate: [x, y, z], rotateX, rotateY, fill: [120, 20, 20]});

    p.pop();

  };
}
