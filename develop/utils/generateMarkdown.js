// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    var str = license;
    str = str.replaceAll(' ','');
    return `![](https://img.shields.io/badge/license-${str}-green)`;
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    var licenseLink = '';
    switch (license) {
         case 'BSD 3':
          licenseLink = 'BSD-3-Clause'/*[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        */break;
        default:
          licenseLink = 'MIT'/*'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'*/;
    }
    return 'https://opensource.org/licenses/${licenseLink}';
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This license under the [${license}](${renderLicenseLink(license)}) license.`;
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ${renderLicenseBadge(answers.license)}

  ## Description

  ${answers.description}


  ## Table of Content
  - [Description](#description)
  - [Install Instructions](#install-instructions)
  - [Usage Information](#usage-information)
  - [License](#license)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test Instructions](#test-instructions)
  - [Questions](#questions)

  ## Install Instructions 
  ${answers.installInstructions}

  ## Usage Information
  ${answers.usageInformation}

  ## License
  ${renderLicenseSection(answers.license)}

  ## Contribution Guidelines 
  ${answers.contributionGuidelines}

  ## Test Instructions
  ${answers.testInstructions}

  ## Questions
  ${answers.email}
  ${answers.username}
`;
}

module.exports = generateMarkdown;
