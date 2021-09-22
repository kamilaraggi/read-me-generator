// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.data = 'None'){
    return console.log(renderLicenseLink)
  }
  console.log(license, renderLicenseBadge);


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README

// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
}
function readmeFunc(data) {
  return `
  # ${data.title}
  ##Table Of Contents
   *[Description](#description)
   *[Languages](#languages)
   *[Installation](#installation)
   *[Usage](#usage)
   *[License](#license)
   *[Contribution](#contribution)
   *[Test](#test)
   *[Credits](#credits)
   

   ##Description:
   ${data.description}
   ##Languages
   ${data.languages}
   ##Installation
   ${data.installation}
   ##Usage
   ${data.usage}
   ##License
   ${data.license}
   ##Contribution
   ${data.contribution}
   ##Test
   ${data.test}
   ##Credits
   (https://github.com/${data.credits});
}

module.exports = generateMarkdown;

