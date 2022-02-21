// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt ([
        {   // provide project name
            type: 'input',
            name: 'title',
            message: 'What is the name of your Project? (Required)',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log('Please enter Project name!');
                    return false;
                }
            }
        },
        {   // provide project description
            type: 'input',
            name: 'desciption',
            message: 'Please provide a description of your Project (Required)',
            validate: projectInfo => {
                if (projectInfo){
                    return true;
                } else {
                    console.log('Please provide project description!');
                    return false;
                }
            } 
        },
        {   // provide install instructions
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your project?',
            validate: projectInstall => {
                if (projectInstall){
                    return true;
                } else{
                    console.log('Please enter steps required to install your project!');
                    return false;
                }
            }
        },
        {   // provide information on how to use users app
            type: 'input',
            name: 'usage',
            message: 'How do you use this app? (Required)',
            validate: usageInfo => {
                if (usageInfo) {
                    return true;
                } else {
                    console.log('Please enter a usage description!');
                    return false;
                }
            }
        },
        {   // provide what the user can contribute
            type: 'input',
            name: 'contributors',
            message: 'What does the user need to know about contributing to the repo'
        },
        {   // what test should be ran
            type: 'input',
            name: 'test',
            message: 'What command should be ran to run test?',
            default: 'npm test'
        },


    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
