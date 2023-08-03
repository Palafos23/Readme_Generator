const allLinks = [
  ['https://choosealicense.com/licenses/mit/#'],
  ['https://choosealicense.com/licenses/apache-2.0/'],
  ['https://choosealicense.com/licenses/agpl-3.0/'],
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    return '![License](https://img.shields.io/badge/license-MIT-green.svg)';
  }else if (license === 'Apache 2.0'){
    return '![License](https://img.shields.io/badge/license-Apache_2.0-blue.svg)';
  }else if (license === 'GNU v3.0'){
 return '![License](https://img.shields.io/badge/license-GNU_v3.0-blue.svg)';
  }else{
    return "";
  }
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  [mit, apache, gnu] = allLinks;
  
  if(license === 'MIT'){
    return mit;
  }else if (license === 'Apache 2.0'){
    return apache;
  }else if (license === 'GNU v3.0'){
    return gnu;
  }else{
    return "";
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT' || 'Apache 2.0' || 'GNU v3.0'){
    return `## License

  The chosen license is [${license}](${renderLicenseLink(license)}).`;
 }else{
    return "";
  }
}

function renderUSACSection(userStoryAcceptanceCriteria) {
  if (userStoryAcceptanceCriteria == 'yes'){
     return `## User Story 
     
  AS A 
  \n 
  I WANT 
  \n
  SO THAT   
  
  ## Acceptance Criteria
  GIVEN
  \n
  WHEN
  \n
  THEN`;

 }else{
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, userStoryAcceptanceCriteria, description, installationInstructions,
  usageInformation, contributionGuidelines, testInstructions, license,
  GithubUsername, emailAddress}) {
  return `
  # ${title}
  ${renderLicenseBadge(license)}

  ${renderUSACSection(userStoryAcceptanceCriteria)}
  
  ## Descripiton
  
  ${description}

  ## Table of contents
  
  [Installation Instuctions](#installationInstructions)
  \n
  [Usage Information](#usageInformation)
  \n
  [Contribution Guidelines](#contributionGuidelines)
  \n
  [Test Instructions](#testInstructions)
  \n
  [License](#license)
  \n
  [Questions](#questions)


  ## Installation Instructions

  ${installationInstructions}

  ## Usage Information
  
  ${usageInformation}

  ## Contribution GuideLines

  ${contributionGuidelines}

  ## Test Instructions
   
  ${testInstructions}

  ${renderLicenseSection(license)}
  
  ## Questions

  Github: [${GithubUsername}](https://github.com/Palafos23)
  \n
  Email: ${emailAddress}
`;
}

module.exports = generateMarkdown;

