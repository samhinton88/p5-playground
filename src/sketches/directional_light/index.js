export const directionalLight = (p) => {

  p.setup = function () {
    p.createCanvas(700, 400, p.WEBGL);
  }

  p.draw = function() {
    const c = p.color(20, 20, 200);
    c[3] = 0;
    p.background(c);
    //move your mouse to change light direction
    const dirX = (p.mouseX / p.width - 0.5) * 2;
    const dirY = (p.mouseY / p.height - 0.5) * 2;
    
    p.ambientMaterial(250);
    p.directionalLight(250, 250, 250, dirX, dirY, 0.25);
 
    p.push();
    p.sphere(100);
    p.fill(200, 20, 20);
    p.noStroke();
    p.pop();

  }
}