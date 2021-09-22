// TODO: Create a function that returns a license badge based on which license is passed in
function generateMarkdown(data) {
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
   [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})]
   ##Contribution
   ${data.contribution}
   ##Test
   ${data.test}
   ##Credits
   (https://github.com/${data.credits}) `;
}


module.exports = generateMarkdown;