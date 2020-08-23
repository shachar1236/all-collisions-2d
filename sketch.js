let colider1;
let colider2;

function setup() {
    createCanvas(400, 400);
    colider1 = new Colider([createVector(0, 0), createVector(40, 0), createVector(40, 40), createVector(0, 40)]);
    colider1.add(10, 20);
    colider2 = new Colider([createVector(0, 0), createVector(40, 0), createVector(40, 40), createVector(0, 40)]);
    colider2.add(100, 100);
    colider2.rotate(0.5);
}

function draw() {
    background(0);
    colider1.move();
    colider2.move();
    colider1.show();
    colider2.show();
}
