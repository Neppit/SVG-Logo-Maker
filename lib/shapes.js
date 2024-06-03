class Triangle {
    constructor(sideLength, color) {
        this.sideLength = sideLength;
        this.color = color;
    }

    generateSVG() {
        return `<svg width="${this.sideLength}" height="${this.sideLength}" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="0,${this.sideLength} ${this.sideLength / 2},0 ${this.sideLength},${this.sideLength}" fill="${this.color}" />
                </svg>`;
    }
}

class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    generateSVG() {
        return `<svg width="${this.radius * 2}" height="${this.radius * 2}" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.color}" />
                </svg>`;
    }
}

class Square {
    constructor(sideLength, color) {
        this.sideLength = sideLength;
        this.color = color;
    }

    generateSVG() {
        return `<svg width="${this.sideLength}" height="${this.sideLength}" xmlns="http://www.w3.org/2000/svg">
                    <rect width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />
                </svg>`;
    }
}

module.exports = { Triangle, Circle, Square };