const licenseLookup = {
    'agpl-3.0': {
        badge: 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg',
        description: 'GNU AGPLv3',
        url: '(http://www.gnu.org/licenses/agpl-3.0)'},
    'gpl-3.0': {
        badge: 'https://img.shields.io/badge/License-GPL%20v3-blue.svg',
        description: 'GNU GPLv3',
        url: 'http://www.gnu.org/licenses/gpl-3.0'},
    'lgpl-3.0': {
        badge: 'https://img.shields.io/badge/License-LGPL%20v3-blue.svg',
        description: 'GNU LGPLv3',
        url: 'http://www.gnu.org/licenses/lgpl-3.0'},
    'mpl-2.0': {
        badge: 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
        description: 'Mozilla Public License 2.0',
        url: 'https://opensource.org/licenses/MPL-2.0'},
    'apache-2.0': {
        badge: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
        description: 'Apache License 2.0',
        url: 'https://opensource.org/licenses/Apache-2.0'},
    'mit': {
        badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
        description: 'MIT License',
        url: 'https://opensource.org/licenses/MIT'},
    'bsl-1.0': {
        badge: 'https://img.shields.io/badge/License-Boost-yellow.svg',
        description: 'Boost Software License 1.0',
        url: 'https://opensource.org/licenses/BSL-1.0'},
    'unlicense': {
        badge: 'https://img.shields.io/badge/License-Unlicense-green.svg',
        description: 'The Unlicense',
        url: 'https://opensource.org/licenses/unlicense'},
}


// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license in licenseLookup){
        const l = licenseLookup[license];
        return `[![${l.description}](${l.badge})](${l.url})`;
    }else{
        return '';
    }
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license in licenseLookup){
        const l = licenseLookup[license];
        return `[${l.description}](${l.url})`;
    }else{
        return '';
    }
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license in licenseLookup){
        const l = licenseLookup[license];
        return `Licensed under ${renderLicenseLink(license)}`;
    }else{
        return '';
    }
}

/**
 * Generate markdown text from data
 * @param {*} data 
 * @returns 
 */
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

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
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For questions contact [${data.email}](mailto:${data.email}) or [github](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
