// TODO: Create a function that returns a license badge based on which license is passed in
function generateMarkdown(data) {
  return`# ${data.title}

   ## Table Of Contents

   1. [Description](#description)
   2. [Languages](#languages)
   3. [Installation](#installation)
   4. [Usage](#usage)
   5. [License](#license)
   6. [Contribution](#contribution)
   7. [Test](#test)
   8. [Credits](#credits)
   

   ## Description 

   ${data.description}

   ___________________________________________

   ## Languages

    > ${data.languages}

   ___________________________________________

   ## Installation
   
   <code>${data.installation}</code>

   ____________________________________________
   
   ## Usage
  
   ${data.usage}

   ____________________________________________

   ## License

   [![License](https://img.shields.io/badge/license-${data.licenses}-${data.color}.svg)](https://www.boost.org/LICENSE_1_0.txt)

   ___________________________________________
   
   ## Contribution

   ${data.contribution}
   
   ____________________________________________

   ## Test
    
   ${data.test}

   ____________________________________________
   
   ## Credits

   (https://github.com/${data.credits})`
}


module.exports = generateMarkdown;