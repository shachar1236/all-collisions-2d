class Colider {
    constructor(vertecis) {
        this.vertecis = vertecis;
        this.coliding = false;
    }

    move() {
        let d = dist(mouseX, mouseY, this.vertecis[0].x, this.vertecis[0].y);
        if (mouseIsPressed && d < 10) {
            let disX = mouseX - this.vertecis[0].x;
            let disY = mouseY - this.vertecis[0].y;
            for (let i = 0; i < this.vertecis.length; i++) {
                this.vertecis[i].x += disX;
                this.vertecis[i].y += disY;
            }
        }
    }

    add(x, y) {
        for (let i = 0; i < this.vertecis.length; i++) {
            this.vertecis[i].x += x;
            this.vertecis[i].y += y;
        }
    }

    colide() {}

    show() {
        beginShape();
        if (this.coliding) {
            stroke(0, 255, 0);
        } else {
            stroke(255, 0, 0);
        }
        noFill();
        for (let ver of this.vertecis) {
            vertex(ver.x, ver.y);
        }
        vertex(this.vertecis[0].x, this.vertecis[0].y);
        endShape();
    }

    rotate(angle) {
        let p = [[], []];
        let n = this.vertecis.length;
        let a = 0;
        let b = 0;
        for (let i = 0; i < n; i++) {
            p[0][i] = this.vertecis[i].x;
            p[1][i] = this.vertecis[i].y;
            a += this.vertecis[i].x;
            b += this.vertecis[i].y;
        }
        a *= 1 / n;
        b *= 1 / n;

        let c = [[], []];
        for (let i = 0; i < n; i++) {
            c[0][i] = a;
            c[1][i] = b;
        }

        const r = [
            [cos(angle), -sin(angle)],
            [sin(angle), cos(angle)],
        ];

        let pNew;
        pNew = math.subtract(p, c);
        pNew = math.multiply(r, pNew);
        pNew = math.add(pNew, c);
        for (let i = 0; i < n; i++) {
            this.vertecis[i].x = pNew[0][i];
            this.vertecis[i].y = pNew[1][i];
        }
    }
}
