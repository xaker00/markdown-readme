const generateMarkdown = require('./generateMarkdown')

const data = {
    fileName: 'README.md',
    title: 'Cool Project',
    description: 'This is a very cool project. It does what you want.',
    installation: '\`npm i\`',
    usage: 'Run the program as follows\r\n' +
      '1. `npm i`\r\n' +
      '1. `node index.js`\r\n' +
      '1. Follow on-screen instructions',
    license: 'mit',
    contributing: 'Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.\n' +
      '\n' +
      '        1. Fork the Project\n' +
      '        2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)\n' +
      "        3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)\n" +
      '        4. Push to the Branch (`git push origin feature/AmazingFeature`)\n' +
      '        5. Open a Pull Request',
    tests: 'Not yet. Contributions welcome.',
    email: 'test@example.com',
    github: 'fabpot'
  }


// simple test to exercise the generateMarkdown function
// with some test data without typing into the console
describe('gnerateMarkdown', () => {
  it('should generate markdown', () => {
    const gm = () => generateMarkdown(data);
    const result = gm();

    expect(result).toMatch(/fabpot/);
    
  });

});