// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ['what is your favorite food?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, err =>
	err ? console.log(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?'
    },
	{
		type:'input',
		name: 'description',
		message: 'Enter a description of your project:',
	},
	{
		type: 'input',
		name: 'installInstructions',
		message: 'Give a detailed descripion on how to install:',
	},
	{
		type: 'input',
		name: 'usageInformation',
		message: 'Usage Information:',
	},
	{
		type: 'list',
		name: 'license',
		message: 'License Information:',
		choices: ['Apache-2.0','MIT'],
	},
	{
		type: 'input',
		name: 'contributionGuidelines',
		message: 'Contribution Guidelines:',
	},	
	{
		type: 'input',
		name: 'testInstructions',
		message: 'Enter Instructions:',
	},
	{
		type: 'input',
		name: 'questions',
		message: 'Questions:',
	},
  ])
  .then(answers => {
/* console.log(answers.title);
console.log(answers.description);
console.log(answers.installInstructions);
console.log(answers.usageInformation);
console.log(answers.contributionGuidelines);
console.log(answers.testInstructions); */

if (answers.license) {
	return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
} 
else {
	return `MIT`
	}
},

writeToFile('README.md',`# ${answers.title}

## Description
${answers.description}

## Table of Content
[Description](#description)
[Install Instructions](#install-instructions)
[Usage Information](#usage-information)
[License](#license)
[Contribution Guidelines](#contribution-guidelines)
[Test Instructions](#test-instructions)
[Questions](#questions)

## Install Instructions 
${answers.installInstructions}

## Usage Information
${answers.usageInformation}

## License
${answers.license}

## Contribution Guidelines 
${answers.contributionGuidelines}

## Test Instructions
${answers.testInstructions}

## Questions
${answers.questions}
`);

  });


