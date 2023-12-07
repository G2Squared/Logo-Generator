const Shape = require('./shape.js');

class Circle extends Shape {
    constructor(text, textColor, color){
        super(text, textColor);
        this.color = color;
    }
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

module.exports = Circle;