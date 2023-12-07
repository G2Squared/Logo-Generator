// Import file
const Circle = require('../lib/circle.js');

describe('Circle', () => {

    
    describe('Instantiate', () => {
        test('Should be an instance of the Circle Class', () => {
            const circle = new Circle();

            expect(circle).toBeInstanceOf(Circle);
        });
    });

    
    describe('Initialize properties', () => {
        test('Should set properties of Circle Class', () => {
            const text = "my text";
            const textColor = "green";
            const color = "blue";
            const circle = new Circle(text, textColor, color);
            
            expect(circle.text).toBe(text);
            expect(circle.textColor).toBe(textColor);
            expect(circle.color).toBe(color);
        });
    });

    
    describe('render() method', () => {
        test('Should return string with properties set', () => {
            const text = "my text";
            const textColor = "green";
            const color = "blue";
            const circle = new Circle(text, textColor, color);
            
            expect(circle.render()).toBe(
                `<circle cx="150" cy="100" r="80" fill="${circle.color}" />`
            );
        });
    });
});