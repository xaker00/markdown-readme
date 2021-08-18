// Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');


// Questions for user input
const questions = [
    {name: 'fileName', type: 'input', message: 'Enter filename', default: 'README-TEST.md'},
    {name: 'title', type: 'input', message: 'Project Title?'},
    {name: 'description', type: 'input', message: 'Description?'},
    {name: 'installation', type: 'editor', message: 'Installation instructions'},
    {name: 'usage', type: 'editor', message: 'Usage?'},
    {name: 'license', type: 'list', message: 'Choose License', choices:[
        {name: 'GNU AGPLv3', value: 'agpl-3.0'},
        {name: 'GNU GPLv3', value: 'gpl-3.0'},
        {name: 'GNU LGPLv3', value: 'lgpl-3.0'},
        {name: 'Mozilla Public License 2.0', value: 'mpl-2.0'},
        {name: 'Apache License 2.0', value: 'apache-2.0'},
        {name: 'MIT License', value: 'mit'},
        {name: 'Boost Software License 1.0', value: 'bsl-1.0'},
        {name: 'The Unlicense', value: 'unlicense'},]},
    {name: 'contributing', type: 'editor', message: 'How to contribute?',
        default: 
`Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

  1. Fork the Project
  2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
  3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
  4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
  5. Open a Pull Request
`},
    {name: 'tests', type: 'input', message: 'Tests?'},
    {name: 'email', type: 'input', message: 'email?'},
    {name: 'github', type: 'input', message: 'GitHub username?'},
];

// A function to write README file
function writeToFile(fileName, data) {
    console.log(data);
    const text = generateMarkdown(data);

    fs.writeFile(fileName, text, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

}

// A function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers => writeToFile(answers.fileName, answers));

}

// Function call to initialize app
init();
