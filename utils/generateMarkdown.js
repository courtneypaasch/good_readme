// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Application Description
  ![license-badge](https://img.shields.io/badge/License-${data.license}-blue.svg)
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contribution-guidelines)
  * [Test](#tests)
  * [Questions](#questions)
  * 
  ## Installation
  Run the following to install necessary packages:
  ${data.install} 

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contribution Guidelines
  ${data.contributing}

  ## Tests
  ${data.test}

  ## Questions
  To see more of my work view my GitHub profile: [https://github.com/${data.github}/](https://github.com/${data.github}/).
  
  For additional questions email me here with the repo name as the subject line: ${data.email}
  `;
}

module.exports = generateMarkdown;

