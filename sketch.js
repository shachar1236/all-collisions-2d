let box1;
let box2;

function setup() {
    createCanvas(400, 400);
    box1 = new Box(10, 10, 40, 40);
    box2 = new Box(100, 100, 40, 40);
}

function draw() {
    background(0);
    box1.move();
    box2.move();
    if (box1.colide(box2)) {
        box1.color = color(0, 255, 0);
    } else {
        box1.color = color(255, 0, 0);
    }
    box2.show();
    box1.show();
}
