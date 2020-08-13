const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Project Title:",
        name: "title"
    },
    {
        type: "input",
        message: "Application Description:",
        name: "description"
    },
    {
        type: "input",
        message: "Install Instructions:",
        name: "install",
        default: "npm i"
    },
    {
        type: "input",
        message: "Usage:",
        name: "usage"
    },
    {
        type: "list",
        message: "License Used:",
        name: "license",
        choices: ["MIT", "APACHE", "GPL", "Affero GPL", "Artistic License 2.0", "Public Domain (unlicense)", "n/a"]
    },
    {
        type: "input",
        message: "Contributing:",
        name: "contributing"
    },
    {
        type: "input",
        message: "Testing Instructions:",
        name: "test",
        default: "run 'npm test'"
    },
    {
        type: "input",
        message: "GitHub Username:",
        name: "github"
    },
    {
        type: "input",
        message: "Email Address:",
        name: "email"
    }
];

// function to write README file
function writeToFile(name, generateFile) {
    fs.writeFile(name, generateFile, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("success");
    });
}

// function to initialize program
async function init() {
    try {
        const userInput = await inquirer.prompt(questions);
        const name = await userInput.title.toLowerCase().split(' ').join('') + "_README.md";
        const generateFile = await generateMarkdown(userInput);
        const writefile = await writeToFile(name, generateFile);
    } catch (error) {
        console.log(error);
    }
}
// function call to initialize program
init();


