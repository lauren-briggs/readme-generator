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
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project",
    }
    {
        type: "input",
        name: "installation instructions",
        message: "What are the steps required to install your project?",
    }
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions and examples for use."
    }
    {
        type: "input",
        name: "contribution",
        message: "Please describe how other developers can contribute."
    }
    {
        type: "input",
        name: "testing",
        message: "What are the testing instructions?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
