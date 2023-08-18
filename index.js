// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
inquirer
.prompt ([{
      type: 'list',
      name: 'userStoryAcceptanceCriteria',
      message: 'Do you want user story and acceptance criteria?',
      choices: ['yes', 'no'],
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title for your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter your projects description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter the installation instructions:',
    },

    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage instructions for this project:',  
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Enter contribution guidelines for this project:',  
    },
    {
      type: 'input',
      name: 'test',
      message: 'Enter test instructions for this project:',  
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license:',
      choices: ['MIT', 'Apache 2.0', 'GNU v3.0']  
    },
    {
      type: 'input',
      name: 'GithubUsername',
      message: 'Enter Github username:',  
    },
    {
      type: 'input',
      name: 'emailAddress',
      message: 'Enter your email address:',  
    },  
])


.then((answers) => {
     const markDown = generateMarkdown(answers);

     fs.writeFile('./Readme_generator_example/README.md', markDown, (err) => 
     err ? console.log(err) : console.log('Generated README.md file!')
);

})
