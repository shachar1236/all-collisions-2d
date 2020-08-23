class Colider {
    static types = ["Box", "Circle", "Polygone"];

    constructor(x, y) {
        this.pos = createVector(x, y);
        this.color = color(255, 0, 0);
        this.center;
    }

    move() {
        let d = dist(mouseX, mouseY, this.pos.x, this.pos.y);
        if (mouseIsPressed && d < 10) {
            this.pos.x = mouseX;
            this.pos.y = mouseY;
        }
        this._moved();
    }

    _moved() {}

    colide() {}

    show() {}
}
