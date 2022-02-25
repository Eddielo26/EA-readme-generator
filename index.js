// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// link to page of README is generated
const generatePage = require('./utils/generateMarkdown.js');

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
            name: 'description',
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
            name: 'installation',
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
            name: 'contribution',
            message: 'What does the user need to know about contributing to the repo.'
        },
        {   // what test should be ran
            type: 'input',
            name: 'test',
            message: 'What command should be ran to run test?',
            // default: 'npm test'
        },
        {   // provide a license 
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'GNU', 'ISC'],
          
        },
        {   // provide github username
            type: 'input',
            name: 'github',
            message: 'Enter your Github username (Required)',
            validate: gitUserInput => {
                if (gitUserInput) {
                    return true;
                } else {
                    console.log('Please enter Github Username!');
                    return false;
                }
            }
        },
        {   // provide user email for contact informartion
            type: 'input',
            name: 'contact',
            message: 'Enter email address (Required)',
            validate: userEmail => {
                if (userEmail) {
                    return true;
                } else {
                    console.log('Please enter users email!');
                    return false;
                }
            }
        }


    ]);
};

// TODO: Create a function to write README file
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        //if there is an error
        if (err) {
            console.log(err);
            return;
        // when the README has been created    
        } else {
            console.log('Your README has been successfully created!')
        }
    })
};


// Function call to initialize app
questions()
// getting user answers
.then(answers => {
    return generatePage(answers);
})
// using data to display on page
.then(data => {
    return writeFile(data);
})
// catching errors
.catch(err => {
    console.log(err)
})
