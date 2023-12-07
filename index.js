//To Import Classes
const Shape = require('./lib/shape.js');
const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');
const Triangle = require('./lib/triangle.js');

// Importing Inquirer and max length input prompt
const inquirer = require('inquirer'); 
const maxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlengthInput', maxLengthInputPrompt);

// Importing File System module
const fs = require('fs'); 

// Function to generate SVG code for the logo
function generateSvg(shape){
    return `<svg height="300" width="400" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    ${shape.renderText()}
    </svg>`
}

// Function to create the logo and write to a file
function createLogo(shape){
    fs.writeFile('./examples/logo.svg' , generateSvg(shape),
    (err) => err ? console.error(err) : console.log('Generated "logo.svg" Sucessfully! Please find this in the "examples" folder.'));
}

// Function to get logo information through Inquirer prompts
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

// Initialize the app
function init() {
    getLogoInfo() // Inquirer prompt
        .then((answers) => { // answers is the response given after running the prompt
            // Create Shape Object and Write to File 
            switch(answers.shape){
                case 'Circle':
                    let circle = new Circle(answers.text, answers.colorText, answers.colorShape);
                    createLogo(circle); 
                    break;
                case 'Square':
                    let square = new Square(answers.text, answers.colorText, answers.colorShape);
                    createLogo(square); 
                    break;
                case 'Triangle':
                    let triangle = new Triangle(answers.text, answers.colorText, answers.colorShape);
                    createLogo(triangle); 
                    break;
                default:
                    console.log("Something went wrong, please try again.");
            }
        });
}

// Function call to initialize app
init();