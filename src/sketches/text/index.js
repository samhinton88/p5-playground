export const text = (p) => {
  p.setup = () => {
    p.createCanvas(700, 400);
  }

  p.draw = () => {
    p.background(200);

    p.text('Hello World', 350, 200)
  }
}