class Box extends Colider {
    constructor(x, y, width, height) {
        super(x, y);
        this.width = width;
        this.height = height;
        this.center = createVector(this.pos.x + width / 2, this.pos.y + height / 2);
        this.type = "Box";
    }

    colide(colider) {
        switch (colider.type) {
            case this.type: // check if this is a box colider
                return this._colideWithBox(colider);
                break;
            default:
                break;
        }
    }

    _colideWithBox(colider) {
        return (
            this.pos.x < colider.pos.x + colider.width &&
            this.pos.x + this.width > colider.pos.x &&
            this.pos.y < colider.pos.y + colider.height &&
            this.pos.y + this.height > colider.pos.y
        );
    }

    show() {
        fill(this.color);
        rect(this.pos.x, this.pos.y, this.width, this.height);
        fill(255);
        circle(this.center.x, this.center.y, 4);
    }

    _moved() {
        this.center.x = this.pos.x + this.width / 2;
        this.center.y = this.pos.y + this.height / 2;
    }
}
