// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description_q1',
        message: 'What was your motivation?',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a project description');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description_q2',
        message: 'Why did you build this project?',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a project description');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description_q3',
        message: 'What problem does it solve?',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a project description');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'description_q4',
        message: 'What did you learn?',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a project description');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What steps are needed to install your project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide installation steps');
                return false;
            }
        }
    },
    
    {
        type: 'input',
        name: 'usage',
        message: 'What is the use of your project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide a use for your project');
                return false;
            }
        }
    },

   {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        message: 'If you followed tutorials, include links to those here as well.',
        validate: contributionsInput => {
            if (contributionsInput) {
                return true;
            } else {
                console.log('Please enter credits guidelines');
                return false;
            }
        }
    }, 

    {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices: ['None', 'Apache 2.0', 'MIT', 'GPL v3.0'],
        validate: licenseInput = () => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please select one of the four options')
                return false;
                }
        }
    },
    
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test this project?',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please explain how to test this project');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
        validate: askMeInput => {
            if (askMeInput) {
                return true;
            } else {
                console.log('Please provide your username');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please provide an email');
                return false;
            }
        }
    }
]

    // exports

// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generatedREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(answer) {
            console.log(answer);
        var fileContent = generateMarkdown(answer);
        writeToFile(fileContent)
        });
}

// Function call to initialize app
init();

module.exports = questions;