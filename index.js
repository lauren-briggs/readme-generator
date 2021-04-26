// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        default: "My New Project"
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project",
        default: "This is my new project.",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
        default: "No installation instructions required."
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions and examples for use.",
        default: "No usage instructions required.",
    },
    {
        type: "input",
        name: "contribution",
        message: "Please describe how other developers can contribute.",
        default: "Contributors welcome",
    },
    {
        type: "input",
        name: "testing",
        message: "What are the testing instructions?",
        default: "No testing instructions required."
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project",
        choices: ["Apache license 2.0", "GNU GPLv3", "MIT", "Mozilla Public License 2.0"],
        default: "MIT",
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your github username.",
        default: "user-github",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address.",
        default: "user@gmail.com"
    },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }

inquirer.prompt(questions)
    .then((data) => {
        const fileName = `${data.title.toLowerCase().split(' ').join('-')}.md`;

        fs.writeFile(fileName, generateMarkdown(data), (err) =>
            err ? console.log(err) : console.log("success!")
        );
    });

// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
// init();

