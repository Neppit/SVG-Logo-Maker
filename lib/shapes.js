class Triangle {
    constructor(sideLength, color) {
        this.sideLength = sideLength;
        this.color = color;
    }

    generateSVG(text, textColor) {
        const fontSize = this.sideLength / 3; // Adjust the divisor to change the relative size of the text
        return `<svg width="${this.sideLength}" height="${this.sideLength}" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="0,${this.sideLength} ${this.sideLength / 2},0 ${this.sideLength},${this.sideLength}" fill="${this.color}" />
                    <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" alignment-baseline="middle" font-size="${fontSize}px">${text}</text>
                </svg>`;
    }
}

class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    generateSVG(text, textColor) {
        const fontSize = this.radius * 0.8; // Adjust the multiplier to change the relative size of the text
        return `<svg width="${this.radius * 2}" height="${this.radius * 2}" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.color}" />
                    <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" alignment-baseline="middle" font-size="${fontSize}px">${text}</text>
                </svg>`;
    }
}

class Square {
    constructor(sideLength, color) {
        this.sideLength = sideLength;
        this.color = color;
    }

    generateSVG(text, textColor) {
        const fontSize = this.sideLength * 0.8; // Adjust the multiplier to change the relative size of the text
        return `<svg width="${this.sideLength}" height="${this.sideLength}" xmlns="http://www.w3.org/2000/svg">
                    <rect width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />
                    <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" alignment-baseline="middle" font-size="${fontSize}px">${text}</text>
                </svg>`;
    }
}

module.exports = { Triangle, Circle, Square };