


export const circleCluster = (p) => {
  p.setup = () => {
    p.createCanvas(710, 400);
  }

  p.draw = () => {
    p.background(200);
    p.ellipse(350, 200, 50, 50)
    p.fill(0, 102, 153, 51)
  }
}