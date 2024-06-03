const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Function to prompt the user for input
async function promptUser() {
    try {
        const userInput = await inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter up to three characters:'
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter text color:'
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape:',
                choices: ['circle', 'triangle', 'square']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter shape color:'
            }
        ]);

        return userInput;
    } catch (error) {
        console.error('Error prompting user:', error);
    }
}

// Function to create SVG based on user input
function createSVG(userInput) {
    let shape;
    switch (userInput.shape) {
        case 'circle':
            shape = new Circle(100, userInput.shapeColor);
            break;
        case 'triangle':
            shape = new Triangle(100, userInput.shapeColor);
            break;
        case 'square':
            shape = new Square(100, userInput.shapeColor);
            break;
        default:
            console.error('Invalid shape:', userInput.shape);
            return;
    }

    const svg = shape.generateSVG();

    return svg;
}

// Function to save SVG to file
function saveSVGToFile(svg) {
    fs.writeFile('logo.svg', svg, err => {
        if (err) {
            console.error('Error saving SVG to file:', err);
        } else {
            console.log('Generated logo.svg');
        }
    });
}

// Main function
async function main() {
    try {
        // Prompt the user for input
        const userInput = await promptUser();

        // Generate SVG based on user input
        const svg = createSVG(userInput);

        // Save SVG to file
        if (svg) {
            saveSVGToFile(svg);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Call the main function
main();