function generateHTML(data) {
  console.log(data);
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
              ${data[0].name}
              <br>
              <br>
              ☕ Manager
            </p>
            <p class="info">ID: ${data[0].id}</p>
            <p class="info">Email: ${data[0].email}</p>
            <p class="info">Office #: ${data[0].officeNumber}</p>
          </div>
          <div class="team-member">
            <p class="position-title">
              ${data[1].name}
              <br>
              <br>
              👓 Engineer
            </p>
            <p class="info">ID: ${data[1].id}</p>
            <p class="info">Email: ${data[1].email}</p>
            <p class="info">GitHub: ${data[1].github}</p>
          </div>
          <div class="team-member">
            <p class="position-title">
              ${data[2].name}
              <br>
              <br>
              🎓 Intern
            </p>
            <p class="info">ID: ${data[2].id}</p>
            <p class="info">Email: ${data[2].email}</p>
            <p class="info">School: ${data[2].school}</p>
          </div>
        </main>
      </body>
    </html>`;
}

module.exports = generateHTML;
