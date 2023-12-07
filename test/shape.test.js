// Import file
const Shape = require('../lib/shape.js');

describe('Shape', () => {

    
    describe('Instantiate', () => {
        test('Should be an instance of the Shape Class', () => {
            const shape = new Shape();

            expect(shape).toBeInstanceOf(Shape);
        });
    });

    
    describe('Initialize properties', () => {
        test('Should set properties of Shape Class', () => {
            const text = "my text";
            const textColor = "blue";
            const shape = new Shape(text, textColor);
            
            expect(shape.text).toBe(text);
            expect(shape.textColor).toBe(textColor);
        });
    });


    describe('renderText() method', () => {
        test('Should return string with properties set', () => {
            const text = "my text";
            const textColor = "blue";
            const shape = new Shape(text, textColor);
            
            expect(shape.renderText()).toBe(
                `<text x="150" y="125" font-size="50" text-anchor="middle" fill="${shape.textColor}"> ${shape.text} </text>`
            );
        });
    });
});