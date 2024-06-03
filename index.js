const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utilities/generateMarkdown.js");
const path = require("path");

// Inquirer prompt questions
const formFields = [
  {
    type: "input",
    name: "title",
    message: "What's the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message:
      "Describe your project. What was your motivation? What problem does it solve? What did you learn?",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide any steps required to install your project:",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use:",
  },
  {
    type: "list",
    name: "license",
    message: "What license would you like to use?",
    choices: [
      "Apache 2.0",
      "Artistic 2.0",
      "Do WTF You Want",
      "GPLv3",
      "MIT",
      "Unlicense",
    ],
  },
  {
    type: "input",
    name: "contribute",
    message: "Let other developers know how they can contribute here:",
  },
  {
    type: "input",
    name: "tests",
    message: "Explain how to run tests here:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email:",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:",
  },
];

// Initialize the app
function init() {
  inquirer.prompt(formFields).then((answers) => {
    console.log("Hang tight! Creating your very special README.md file!");
    writeToFile("./printout/README.md", generateMarkdown({ ...answers }));
  });
}

// Create README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

init();
