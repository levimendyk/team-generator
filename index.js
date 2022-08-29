// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./utils/manager");
const Engineer = require("./utils/engineer");
const Intern = require("./utils/intern");
const generate = require('./template')

const teamMembers = [];

//Generates the HTML page from the node command - Add the template.html into the ``

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
        name: "managername",
      },
      {
        type: "input",
        message: "What is the team manager's id?",
        name: "managerid",
      },
      {
        type: "input",
        message: "What is the team manager's email?",
        name: "manageremail",
      },
      {
        type: "input",
        message: "What is the team manager's office number?",
        name: "managerofficenumber",
      },
    ])
    // Testing this code .then  Want it to go to the next new team member or exit out and then create the html page.
    // .then(function ({ name, id, email }) {})
    .then((response) => {
      const manager = new Manager(
        response.managername,
        response.managerid,
        response.manageremail,
        response.managerofficenumber
      );
      teamMembers.push(manager);
      console.log(teamMembers);
      mainQuestion();
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.error(error);
      }
    });
}

function mainQuestion() {
  inquirer.prompt([
    {
      type: "list",
      name: "newmember",
      message: "Add a new Team Member",
      choices: ["Engineer", "Intern", "No more Team Members to add"],
    },
  ])
  .then(response => {
    if(response.newmember === "Engineer") {
      generateEngineer()
    } else if (response.newmember === "Intern") {
      generateIntern()
    } else {
      createTeam()
    }
  })
}

// Generate Engineer
function generateEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the team engineer's name?",
        name: "engineerName",
      },
      {
        type: "input",
        message: "What is the team engineer's id?",
        name: "engineerId",
      },
      {
        type: "input",
        message: "What is the team engineer's email?",
        name: "engineerEmail",
      },
      {
        type: "input",
        message: "What is the team engineer's GitHub?",
        name: "engineerGithub",
      },
    ])
    .then((response) => {
      const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub)
      teamMembers.push(engineer)
      console.log(teamMembers);
      mainQuestion()
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.error(error);
      }
    });
}

// // Generate Intern
// function generateIntern() {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         message: "What is the team intern's name?",
//         name: "intern-name",
//       },
//       {
//         type: "input",
//         message: "What is the team intern's id?",
//         name: "intern-id",
//       },
//       {
//         type: "input",
//         message: "What is the team intern's email?",
//         name: "intern-email",
//       },
//       {
//         type: "input",
//         message: "What is the team intern's school?",
//         name: "intern-school",
//       },
//     ])
//     .then((response) => {
//       // Use user feedback for... whatever!!
//       const htmlContent = generateHTML(response);
//       fs.writeFile("index.html", htmlContent, (err) =>
//         err ? console.error(err) : console.log("Team Genarted Successfully!")
//       );
//     })
//     .catch((error) => {
//       if (error.isTtyError) {
//         // Prompt couldn't be rendered in the current environment
//         console.error(error);
//       }
//     });
// }

function createTeam() {
  fs.writeFile('index.html', generate(teamMembers), (err) => {
    if(err) throw err;
    console.log('Team Built!');
  })
}

// Call the Logic to run app
runApp();