var system;

export const simulateParticleSystem = (p) => {
  let cluster, spread= 3;

  p.setup = () => {
    p.createCanvas(720, 400);

    cluster = [ ...Array(spread).keys() ].map((i) => {
      return new ParticleSystem(p.createVector((p.width / 2) * (i), Math.sin(i) * 200))
    })
  }

  p.draw = () => {
    p.background(250, 10, 10);
    cluster.forEach((system) => {
      
      system.addParticle();
      system.run();
    })
  }
  var Particle = function(position) {
    this.acceleration = p.createVector(0, 0.05);
    this.velocity = p.createVector(p.random(-10, 10), p.random(-10, 10));
    this.position = position.copy();
    this.lifespan = 100;
    this.timer = 0;
    this.clock = setInterval(() => { this.timer +=1 }, 1000)
  };
  // A simple Particle class
  
  Particle.prototype.run = function() {
    this.update();
    this.display();
  };
  
  // Method to update position
  Particle.prototype.update = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  };
  
  // Method to display
  Particle.prototype.display = function() {
    p.stroke(20, 20, 200, this.lifespan);
    p.strokeWeight(2);
    p.fill(20,20, 210, this.lifespan);
    p.ellipse(this.position.x, this.position.y, 10, 10);
  };
  
  // Is the particle still useful?
  Particle.prototype.isDead = function(){
    return this.lifespan < 0;
  };
  
  var ParticleSystem = function(position) {
    this.origin = position.copy();
    this.particles = [];
  };
  
  ParticleSystem.prototype.addParticle = function() {
    this.particles.push(new Particle(this.origin));
  };
  
  ParticleSystem.prototype.run = function() {
    for (var i = this.particles.length-1; i >= 0; i--) {
      var p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  };
}
