// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('../develop/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, err =>
	err ? console.log(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init(){
	return inquirer
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
		choices: ['BSD 3','MIT'],
	},
	{
		type: 'input',
		name: 'contributionGuidelines',
		message: 'Contribution Guidelines:',
	},	
	{
		type: 'input',
		name: 'testInstructions',
		message: 'Enter Testing Instructions:',
	},
	{
		type: 'input',
		name: 'username',
		message: 'What is your GitHub username? ',
	},
	{
		type: 'input',
		name: 'email',
		message: 'What is your email address?'
	}
  ])
  .then(answers => {
	 if (answers.license === 'None') {
		  answers.license = null;
	  } 

writeToFile('README.md', generateMarkdown(answers))
  })
}

init();
