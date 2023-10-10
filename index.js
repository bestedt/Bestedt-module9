// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your name of your wicked cool new Project?',
    },

    {
        type: 'input',
        name: 'projectDescription',
        message: 'Please describe your wicked cool new Project',
    },

    {
        type: 'input',
        name: 'projectInstallation',
        message: 'Please describe the Installation Instructions for this ground breaking new Project',
    },

    {
        type: 'input',
        name: 'projectUsage',
        message: 'Please describe your Project Usage Information',
    },

    {
        type: 'input',
        name: 'projectContribution',
        message: 'Please describe the Contribution Guidelines for this ground breaking new Project',
    },

    {
        type: 'input',
        name: 'projectTest',
        message: 'Please describe your Project Test Instructions',
    },

    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'BSD-2', 'BSD-3', 'Boost Software', 'Creative Commons', 'Eclipse Public', 'GNU Affero', 'GNU General', 'GNU Lesser', 'Mozilla', 'No License'],
    },

    {
        type: 'input',
        name: 'githubUsername',
        message: 'Can you provide me your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'One last question! What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`README saved as "${fileName}"`);
        }
    });
}
// TODO: Create a function to initialize app
// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            if (answers && answers['projectName']) {
                const projectName = answers['projectName'];
                const projectDescription = answers['projectDescription'];
                const projectInstallation = answers['projectInstallation'];
                const projectUsage = answers['projectUsage'];
                const projectContribution = answers['projectContribution'];
                const projectTest = answers['projectTest'];
                const fileName = `${projectName.replace(/ /g, '-')}-README.md`;

                // Call generateMarkdown function with the collected data
                const readmeContent = generateMarkdown({
                    title: projectName,
                    description: projectDescription,
                    installation: projectInstallation,
                    usage: projectUsage,
                    contributing: projectContribution,
                    tests: projectTest,
                    email: answers.email,
                    github: answers.githubUsername,
                    license: answers.license,
                });

                writeToFile(fileName, readmeContent);
            } else {
                console.error('Project name is missing or undefined in answers.');
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

// Function call to initialize app
init();