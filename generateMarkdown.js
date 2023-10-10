/**
 * Function to render the license badge
 * @param {string} license - The license type
 * @returns {string} - The license badge as a string
 */
function renderLicenseBadge(license) {
  if (license) {
      return `![License](https://img.shields.io/badge/license-${license}-brightgreen)`;
  }
  return '';
}

/**
 * Function to render the license link
 * @param {string} license - The license type
 * @returns {string} - The license link as a string
 */
function renderLicenseLink(license) {
  if (license) {
      return `[License Information](https://choosealicense.com/licenses/${license}/)`;
  }
  return '';
}

/**
 * Function to render the license section of README
 * @param {string} license - The license type
 * @returns {string} - The license section as a string
 */
function renderLicenseSection(license) {
  if (license) {
      return `This project is licensed under the [${license} License](${renderLicenseLink(license)}).`;
  }
  return '';
}

/**
 * Function to generate markdown for README
 * @param {object} data 
 * @returns {string} 
 */
function generateMarkdown(data) {
  console.log(data);
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `
# ${data.title}

${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseSection}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, contact me at [${data.email}](mailto:${data.email}).
You can also visit my GitHub profile: [${data.github}](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
