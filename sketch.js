let colider1;
let colider2;

function setup() {
    createCanvas(400, 400);
    colider1 = new Circle(10, 10, 60);
    colider2 = new Box(100, 100, 40, 40);
}

function draw() {
    background(0);
    colider1.move();
    colider2.move();
    colider2.show();
    colider1.show();
    if (colider1.colide(colider2)) {
        colider1.color = color(0, 255, 0);
    } else {
        colider1.color = color(255, 0, 0);
    }
}
