// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        name:'title',
        message:'What is your Project Title?'
    },
    {
        type:'input',
        name:'description',
        message:'Describe your project.'
    },
    {
       type:'confirm',
       message:'Add Table Of Contents?',
       name:'contents',
    },
    {
        type:'input',
        name:'installation',
        message:'Provide a step-by-step description of how to get the development environment running.'
    },
    {
        type: 'input',
        name:'usage',
        message:'Provide instructions and examples for use. Include screenshots as needed.'
    },
    {
        type:'input',
        name:'credits',
        message:'List your collaborators.'
    },
    {
        type:'input',
        name:'license',
        message:'Choose a license, for help use https://choosealicense.com/'
    },
 ])
// TODO: Create a function to write README file
.then(function(data) {
    const readme = data.name.toLowerCase().split(' ').join('') + '.json'
    fs.writeFile('readme.md', JSON.stringify('README', data, null, '\t'), function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
  });
});
// TODO: Create a function to initialize app
//function init() {}
// Function call to initialize app
//init();