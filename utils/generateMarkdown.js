
//Create a function to generate markdown for README
//Create a table of contents that link each tab to its corresponding part
//Provide link to take users answers and apply to README
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
