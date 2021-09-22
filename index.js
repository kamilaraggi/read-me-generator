//Kamila Raggi homework 09-challenge

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


var questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?'
    },
    {
      type: 'input',
      name: 'descripition',
      message: 'Describe you project:',
      
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What languages do you used?',
      choices: ['HTML', 'CSS', 'Javascript', 'Nodejs', 'Bootstrap', 'Others']
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
    },
    {
      type: 'checkbox',
      name: 'linceses',
      message: 'What languages do you used?',
      choices: ['ISC', 'MIT', 'PDDL', 'Zlib', 'None']
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'How to contribuite to the project.',
    },
    {
      type: 'input',
      name: 'test',
      message: 'How to test the project.',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, with links to their GitHub profiles.',
    },
  ]
    function writeToFile(filename ,data){
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) => {

      if (err) {
        return console.log(err);
      }

      console.log("Success! You have just created a high quality README for your project.");
    
  });
};

function init(){
  inquirer.prompt(questions)
  .then(function (userInput){
   writeToFile("README.md", generateMarkdown(userInput));
  });
};

init();