// Choose Badge Function
function chooseBadge(license) {
  return [
    {
      name: "Apache 2.0",
      badge: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
      link: "https://opensource.org/license/apache-2-0",
    },
    {
      name: "Artistic 2.0",
      badge: "https://img.shields.io/badge/License-Artistic_2.0-green.svg",
      link: "https://opensource.org/license/artistic-2-0",
    },
    {
      name: "Do WTF You Want",
      badge: "https://img.shields.io/badge/License-WTFPL-grey.svg",
      link: "http://www.wtfpl.net/about/",
    },
    {
      name: "GPLv3",
      badge: "https://img.shields.io/badge/License-GPL_v3-blue.svg",
      link: "https://www.gnu.org/licenses/gpl-3.0.en.html",
    },
    {
      name: "MIT",
      badge: "https://img.shields.io/badge/License-MIT-yellow.svg",
      link: "https://opensource.org/license/MIT",
    },
    {
      name: "Unlicense",
      badge: "https://img.shields.io/badge/License-Unlicense-grey.svg",
      link: "https://unlicense.org/",
    },
  ].find((obj) => obj.name === license);
}

// Render Badge Function
function renderBadge(license) {
  const badgeObj = chooseBadge(license);
  if (!badgeObj) return ""; // Return an empty string if no matching license is found
  return `[![License](${badgeObj.badge})](${badgeObj.link})`;
}

// Render Link Function
function renderLink(license) {
  const badgeObj = chooseBadge(license);
  if (!badgeObj) return ""; // Return an empty string if no matching license is found
  return badgeObj.link;
}

// Generate Markdown Function
function generateMarkdown(data) {
  return `# ${data.title}

## Description  
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribute](#contribute)
* [Tests](#tests)
* [Questions](#questions) 

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderBadge(data.license)}

## Contribute
${data.contribute}

## Tests
${data.tests}

## Questions?
${data.email}
Feel free to reach out with any questions!  Thank you for supporting my project.
github.com/${data.github}
  `;
}

module.exports = generateMarkdown;
