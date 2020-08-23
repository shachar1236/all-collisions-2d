class Colider {
    static types = ["Box", "Circle", "Polygone"];

    constructor(x, y, width, height) {
        this.pos = createVector(x, y);
        this.width = width;
        this.height = height;
        this.color = color(255, 0, 0);
        this._created();
    }

    move() {
        let d = dist(mouseX, mouseY, this.pos.x, this.pos.y);
        if (mouseIsPressed && d < 10) {
            this.pos.x = mouseX;
            this.pos.y = mouseY;
        }
    }

    colide() {}

    show() {}

    _created() {}
}
