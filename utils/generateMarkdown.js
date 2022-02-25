// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  ![badge](https://img.shields.io/badge/License-${data.license}-yellow.svg)
  
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Contact](#contact)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is lincensed under ${data.license}
  
  

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

  ## Contact
  If you have any questions about this project, please contact me at ${data.contact}<br> More projects available at https://github.com/${data.github}.

`;
}
// used for importing markdown in index
module.exports = generateMarkdown;
