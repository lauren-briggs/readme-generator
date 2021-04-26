// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  if (license === "Apache license 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "MIT") {
    return "![NPM](https://img.shields.io/npm/l/inquirer)";
  } else if (license === "Mozilla Public License") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
${data.description}

  ##Table of Contents
  - [Installation Instructions](#Installation Instructions)
  - [Usage Information](#Usage Information)
  - [Contribution Guidelines](#Contribution Guidelines)
  - [Testing Instructions](#Testing Instructions)
  - [Questions](#Questions)

  ### Installation Instructions
${data.installation}

  ### Usage Information
${data.usage}

  ### Contribution Guidelines
${data.contribution}

  ### Testing Instructions
${data.testing}

  ### Questions
[github.com / ${data.username}](github.com / ${data.username})
${data.email}
`;
}

module.exports = generateMarkdown;
