// TODO: Include packages needed for this application
const fs = require("fs");
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
          'Apache License 2.0',
          'GNU General Public License v3.0', 
           'MIT License', 'BSD 2-Clause "Simplified" License', 
           'BSD 3-Clause "New" or "Revised" License', 
           'Boost Software License 1.0', 
           'Creative Commons Zero v1.0 Universal', 
           'GNU Affero General Public License v3.0',
           'GNU General Public License v2.0',
           'Mozilla Public License 2.0',
           'The Unlicense',
           'None'
        ],
      },
      {
        //testing protocols
        type: "input",
        name: "testing",
        message: "Please enter any testing protocols you used for your project:",
      },
      {
        type: "input",
        name: "author",
        message: "Enter your name: ",
      },
      {
        type: "input",
        name: "contributors",
        message: "Enter any additional contributors: ",
      },
      {
        type: "input",
        name: "username",
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
        message: "Enter the Repository URL: ",
      },
      
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err
        console.log('README has been successfully saved! You can find the results in readme-demo.md in the utils folder. ')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
        const readme = generateMarkdown(answers)
        // console.log(readme)

        writeToFile('./readme-demo.md', readme)
    })
    .catch(err => console.log(err))
}

// Function call to initialize app
init();
