const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
    test('generates correct SVG code', () => {
        const triangle = new Triangle(100, 'red');
        const svg = triangle.generateSVG();
        expect(svg).toContain('<svg');
        expect(svg).toContain('<polygon');
        expect(svg).toContain('fill="red"');
    });
});

describe('Circle', () => {
    test('generates correct SVG code', () => {
        const circle = new Circle(50, 'blue');
        const svg = circle.generateSVG();
        expect(svg).toContain('<svg');
        expect(svg).toContain('<circle');
        expect(svg).toContain('fill="blue"');
    });
});

describe('Square', () => {
    test('generates correct SVG code', () => {
        const square = new Square(80, 'green');
        const svg = square.generateSVG();
        expect(svg).toContain('<svg');
        expect(svg).toContain('<rect');
        expect(svg).toContain('fill="green"');
    });
});