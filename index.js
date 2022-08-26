// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./utils/employee");

const generateHTML = require("./utils/generatehtml.js");
// const newDiv = document.createElement("div");

// Runs through all the individual functions
function runApp() {
  generateManager();
}

// Generate first prompt, creating a Team, first question is to about the manager of the team
function generateManager() {
  console.log("Build Your Team 👥");

  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the team manager's name?",
        name: "manager-name",
      },
      {
        type: "input",
        message: "What is the team manager's id?",
        name: "manager-id",
      },
      {
        type: "input",
        message: "What is the team manager's email?",
        name: "manager-email",
      },
      {
        type: "input",
        message: "What is the team manager's office number?",
        name: "manager-officenumber",
      },
    ])
    .then((response) => {
      // Use user feedback for... whatever!!
      const htmlContent = generateHTML(response);
      fs.writeFile("index.html", htmlContent, (err) =>
        err ? console.error(err) : console.log("Team Genarted Successfully!")
      );
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.error(error);
      }
    });
}

// Next display information asking about the other members of the team, employee, engineer, intern

// Call the Logic to run app
runApp();
