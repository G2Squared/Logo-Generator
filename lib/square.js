const Shape = require('./shape.js');

class Square extends Shape {
    constructor(text, textColor, color){
        super(text, textColor);
        this.color = color;
    }
    render(){
        return `<rect x="60" y="25" width="175" height="175" fill="${this.color}" />`;
    }
}

module.exports = Square;