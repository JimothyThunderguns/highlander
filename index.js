// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
const questions = [
    {
        //title
        type: "input",
        name: "title",
        message: "Enter the project title: ",
      },
      {
        //description
        type: "input",
        name: "description",
        message: "Please enter a one-sentence description of your project:",
      },
      {
        //about
        type: "input",
        name: "about",
        message: "Explain the motivation behind the project.",
      },
      {
        //installation
        type: "input",
        name: "installation",
        message: "What are the installation instructions if there are any?",
        
      },
      {
        //usage
        type: "input",
        name: "usage",
        message: "Explain the usage of the project: ",
      },
      {
        type: "list",
        name: "license",
        message: "Choose the appropriate License: ",
        choices: [
          "Apache",
          "Boost",
          "GNU AGPLv3",
          "GNU GPLv3",
          "GNU LGPLv3",
          "Mozilla",
          "MIT",
        ],
      },
      {
        //testing protocals
        type: "input",
        name: "testing",
        message: "Please enter any testing protocols you used for your project?",
      },
      {
        type: "input",
        name: "author",
        message: "Enter your name: ",
      },
      {
        type: "input",
        name: "Username",
        message: "What is your GitHub username?",
      },
      {
        type: "input",
        name: "email",
        message: "Enter an email to contact: ",
      },
      {
        type: "input",
        name: "URL",
        message: "Enter the Repository URL",
      },
      
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err
        console.log('README has been successfully saved!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
        const readme = generateMarkdown(answers)
        // console.log(readme)

        writeToFile('./readme-sample.md', readme)
    })
    .catch(err => console.log(err))
}

// Function call to initialize app
init();
