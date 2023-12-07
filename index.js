//To Import Classes
const Shape = require('./lib/shape.js');
const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');
const Triangle = require('./lib/triangle.js');

const inquirer = require('inquirer'); 
const maxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlengthInput', maxLengthInputPrompt);

const fs = require('fs'); 

function generateSvg(shape){
    return `<svg height="300" width="400" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    ${shape.renderText()}
    </svg>`
}


function createLogo(shape){
    fs.writeFile('./examples/logo.svg' , generateSvg(shape),
    (err) => err ? console.error(err) : console.log('Generated "logo.svg" Sucessfully! Please find this in the "examples" folder.'));
}

const getLogoInfo = () => {
    return inquirer.prompt ([
        {
            type: 'maxlengthInput',
            name: 'text',
            message: "Please enter the text for your logo",
            maxLength: '3',
        },
        {
            type: 'input',
            name: 'colorText',
            message: 'Please enter the color of the text you would like',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please select your shape choice',
            choices: ['Circle', 'Square', 'Triangle'],
        },
        {
            type: 'input',
            name: 'colorShape',
            message: 'Please enter the color for your shape',
        },
    ]);
}