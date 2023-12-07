// Import file
const Square = require('../lib/square.js');

describe('Square', () => {

    
    describe('Instantiate', () => {
        test('Should be an instance of the Square Class', () => {
            const square = new Square();

            expect(square).toBeInstanceOf(Square);
        });
    });

    
    describe('Initialize properties', () => {
        test('Should set properties of Square Class', () => {
            const text = "my text";
            const textColor = "green";
            const color = "blue";
            const square = new Square(text, textColor, color);
            
            expect(square.text).toBe(text);
            expect(square.textColor).toBe(textColor);
            expect(square.color).toBe(color);
        });
    });

   
    describe('render() method', () => {
        test('Should return string with properties set', () => {
            const text = "my text";
            const textColor = "green";
            const color = "blue";
            const square = new Square(text, textColor, color);
            
            expect(square.render()).toBe(
                `<rect x="60" y="25" width="175" height="175" fill="${square.color}" />`
            );
        });
    });
});