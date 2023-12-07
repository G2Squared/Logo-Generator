// Import file
const Triangle = require('../lib/triangle.js');

describe('Triangle', () => {

    
    describe('Instantiate', () => {
        test('Should be an instance of the Triangle Class', () => {
            const triangle = new Triangle();

            expect(triangle).toBeInstanceOf(Triangle);
        });
    });

   
    describe('Initialize properties', () => {
        test('Should set properties of Triangle Class', () => {
            const text = "my text";
            const textColor = "green";
            const color = "blue";
            const triangle = new Triangle(text, textColor, color);
            
            expect(triangle.text).toBe(text);
            expect(triangle.textColor).toBe(textColor);
            expect(triangle.color).toBe(color);
        });
    });

    
    describe('render() method', () => {
        test('Should return string with properties set', () => {
            const text = "my text";
            const textColor = "green";
            const color = "blue";
            const triangle = new Triangle(text, textColor, color);
            
            expect(triangle.render()).toBe(
                `<polygon points="150, 18 244, 182 56, 182" fill="${triangle.color}" />`
            );
        });
    });
});