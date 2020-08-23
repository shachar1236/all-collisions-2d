class Circle extends Colider {
    constructor(x, y, r) {
        super(x, y);
        this.r = r;
        this.center = this.pos;
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
        let d = other.center.copy();
        d.sub(this.pos);
        d.setMag(this.r);
        let p = this.pos.copy();
        p.add(d);
        fill(255);
        circle(p.x, p.y, 4);
        return (
            p.x > other.pos.x &&
            p.x < other.pos.x + other.width &&
            p.y > other.pos.y &&
            p.y < other.pos.y + other.height
        );
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
        this.center = this.pos;
    }
}
