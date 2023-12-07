class Shape {
    constructor(text, textColor){
        this.text = text;
        this.textColor = textColor;
    }
    renderText() {
        return `<text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}"> ${this.text} </text>`;
    }
}

module.exports = Shape;