class Box extends Colider {
    colide(colider) {
        switch (colider.colider) {
            case this.colider: // check if this is a box colider
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
    }

    _created() {
        this.colider = "Box";
    }
}
