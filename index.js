// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = request("./utils/generatehtml.js");
const newDiv = document.createElement("div");
const 

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "input",
      message: "What is the the project title?",
      name: "title",
    },
    {
      type: "input",
      message: "What is the description?",
      name: "description",
    },
    {
      type: "input",
      message: "What is the installation instructions?",
      name: "installation",
    },
    {
      type: "input",
      message: "What is the usage informations?",
      name: "usage",
    },
    {
      type: "input",
      message: "What are the contribution guidelines?",
      name: "guidelines",
    },
    {
      type: "input",
      message: "What are the tests?",
      name: "tests",
    },
    {
      type: "list",
      message: "What is the license you are using?",
      name: "license",
      choices: ["Apache", "MIT", "BOOST", "None"],
    },
    {
      type: "input",
      message: "What is the link to the GitHub profile?",
      name: "link",
    },
    {
      type: "input",
      message:
        "What is your email address to contact for additional questions?",
      name: "email",
    },
  ])
  .then((response) => {
    // Use user feedback for... whatever!!
    const htmlContent = generateHTML.generateMarkdown(response);
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

  //Create a new div
