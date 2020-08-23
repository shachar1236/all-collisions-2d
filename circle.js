class Circle extends Colider {
    constructor(x, y, r) {
        super(x, y);
        this.r = r;
        this.center = pos;
        this.type = "Circle";
    }

    colide(other) {
        switch (other.type) {
            case this.type:
                return this._colideWithCircle(other);
                break;
            case "Box":
                return this._colideWithBox(other);
                break;
            default:
                break;
        }
    }

    _colideWithBox(other) {
        let point = 
    }

    _colideWithCircle(other) {
        let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        return d < this.r + other.r;
    }

    show() {
        fill(this.color);
        circle(this.pos.x, this.pos.y, this.r * 2);
    }

    _moved() {
        center = this.pos;
    }
}
