// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./utils/employee");
const Manager = require("./utils/manager");
const Engineer = require("./utils/engineer");
const Intern = require("./utils/intern");

//Generates the HTML page from the node command - Add the template.html into the ``
function generateHTML(data) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="./assets/css/reset.css" />
      <link rel="stylesheet" href="./assets/css/style.css" />
    </head>
    <body>
      <header>My Team</header>
      <main>
        <div class="team-member">
          <p class="position-title">
            ${data.managername}
            <br>
            <br>
            ☕ Manager
          </p>
          <p class="info">ID: ${data.managerid}</p>
          <p class="info">Email: ${data.manageremail}</p>
          <p class="info">Office #: ${data.managerofficenumber}</p>
        </div>
        <div class="team-member">
          <p class="position-title">
            ${data.engineername}
            <br>
            <br>
            👓 Engineer
          </p>
          <p class="info">ID: ${data.engineerid}</p>
          <p class="info">Email: ${data.engineeremail}</p>
          <p class="info">GitHub: ${data.engineergithub}</p>
        </div>
        <div class="team-member">
          <p class="position-title">
            ${data.internname}
            <br>
            <br>
            🎓 Intern
          </p>
          <p class="info">ID: ${data.internid}</p>
          <p class="info">Email: ${data.internemail}</p>
          <p class="info">School: ${data.internschool}</p>
        </div>
      </main>
    </body>
  </html>`;
}

// Runs through all the individual functions
function runApp() {
  generateManager();
  // generateEngineer();
  // generateIntern();
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
      {
        type: "list",
        name: "newmember",
        message: "Add a new Team Member",
        choices: ["Engineer", "Intern", "No more Team Members to add"],
      },
    ])
    // Testing this code .then  Want it to go to the next new team member or exit out and then create the html page.
    // .then(function ({ name, id, email }) {})
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

// Generate Engineer
// function generateEngineer() {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         message: "What is the team engineer's name?",
//         name: "engineer-name",
//       },
//       {
//         type: "input",
//         message: "What is the team engineer's id?",
//         name: "engineer-id",
//       },
//       {
//         type: "input",
//         message: "What is the team engineer's email?",
//         name: "engineer-email",
//       },
//       {
//         type: "input",
//         message: "What is the team engineer's GitHub?",
//         name: "engineer-github",
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

// Call the Logic to run app
runApp();
