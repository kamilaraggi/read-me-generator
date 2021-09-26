//Kamila Raggi 09-challenge README generator

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


var questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
      validate: titleInput => {
        if (titleInput) {
          return true
        } else {
          console.log('You need to enter a Project tile!')
          return false
        }
      }
    },
    {
      type: 'input',
      name: 'descripition',
      message: 'Describe you project:',
      validate: descInput => {
        if (descInput) {
          return true

        } else {

        console.log('You need to describe you project!')
          return false
        }
      }
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What languages do you used?',
      choices: ['HTML', 'CSS', 'Javascript', 'Nodejs', 'Bootstrap', 'Others'],
      validate: languageInput =>{
        if(languageInput) {
          return true
        } else {
           console.log('You need to provide which languages do you use.')
           return false 
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
      validate: installInput => {
        if (installInput) {
          return true;
        } else {
          console.log('How to install you project?');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
      validate: instruInput => {
        if (instruInput) {
          return true;
        } else {
          console.log('Please provide some instruction to use your project!');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'licenses',
      message: 'Choose a license to use:',
      choices: ['ISC', 'MIT', 'PDDL', 'Perl', 'None'],
      validate: licenseInput => {
        if (licenseInput) {
          return true;
        } else {
          console.log('You need to choose one option.');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'color',
      message: 'Choose a color to use on your license badge:',
      choices: ['blue', 'orange', 'yellow', 'brightgreen', 'lightgray'],
      validate: badgeInput => {
        if (badgeInput) {
          return true;
        } else {
          console.log('You need to choose one option.');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'contribution',
      message: 'How to contribuite to the project.',
      validate: contriInput => {
        if (contriInput) {
          return true;
        } else {
          console.log('Please provide some information how to contribuite to your project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'test',
      message: 'How to test the project.',
      validate: testInput => {
        if (testInput) {
          return true;
        } else {
          console.log('You need to test information for you project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, enter GitHub username.',
      validate: creditsInput => {
        if (creditsInput) {
          return true;
        } else {
          console.log('You need to enter a GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmReadme',
      message: 'Would you like to generate this Readme file?',
      default: false
    }
 ];
   
  function writeToFile(fileName ,data) {
  fs.writeFile(fileName, (data), (err) => {
      if (err) {
        return console.log(err);
      }

      console.log("Success! You have just created a high quality README for your project.");
    
  });
 };
function init(){
  inquirer.prompt(questions)
  .then(function (userInput){
    console.log(userInput)
   writeToFile("README.md", generateMarkdown(userInput));
  });
};

init();