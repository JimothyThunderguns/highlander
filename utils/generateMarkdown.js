// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT License') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'Apache License 2.0') {
    return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  } else if (license === 'GNU General Public License v3.0') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else if (license === 'BSD 2-Clause "Simplified" License') {
    return '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)'
  } else if (license === 'BSD 3-Clause "New" or "Revised" License') {
    return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
  } else if (license === 'Boost Software License 1.0') {
    return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)'
  } else if (license === 'Creative Commons Zero v1.0 Universal') {
    return '![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)'
  } else if (license === 'GNU Affero General Public License v3.0') {
    return '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)'
  } else if (license === 'GNU General Public License v2.0') {
    return '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)'
  } else if (license === 'Mozilla Public License 2.0') {
    return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
  } else if (license === 'The Unlicense') {
    return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)'
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT License') {
    return 'https://opensource.org/licenses/MIT'
  } else if (license === 'Apache License 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0'
  } else if (license === 'GNU General Public License v3.0') {
    return 'https://www.gnu.org/licenses/gpl-3.0'
  } else if (license === 'BSD 2-Clause "Simplified" License') {
    return 'https://opensource.org/licenses/BSD-2-Clause'
  } else if (license === 'BSD 3-Clause "New" or "Revised" License') {
    return 'https://opensource.org/licenses/BSD-3-Clause'
  } else if (license === 'Boost Software License 1.0') {
    return 'https://www.boost.org/LICENSE_1_0.txt'
  } else if (license === 'Creative Commons Zero v1.0 Universal') {
    return 'http://creativecommons.org/publicdomain/zero/1.0/'
  } else if (license === 'GNU Affero General Public License v3.0') {
    return 'https://www.gnu.org/licenses/agpl-3.0'
  } else if (license === 'GNU General Public License v2.0') {
    return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
  } else if (license === 'Mozilla Public License 2.0') {
    return 'https://opensource.org/licenses/MPL-2.0'
  } else if (license === 'The Unlicense') {
    return 'http://unlicense.org/'
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ""
  } else {
    return `## License\n  ${license}: ${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const {
    title,
    description,
    about,
    installation,
    usage,
    license,
    contributors,
    testing,
    URL,
    Username,
    email
  } = data

  return `
  [${renderLicenseBadge(license)}](${renderLicenseLink(license)})
  
  # ${title}

  ## Description of Project
  ${description}

  ##Motivation
  ${about}


  ##Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Author](#Author)
  6. [Contributors](#contributors)
  7. [Tests](#tests)
  8. [Questions](#questions)

  ## Installation 
  ${installation}

  ##Usage
  ${usage}

  ## Contributors
  ${contributors}

  
  ${renderLicenseSection(license)}
  
  ## Contributors
  ${contributors}

  ##Tests
  ${testing}

  ##Questions
 Repo Link: ${URL}

Contact ${email} or ${Username} if you have any further questions.
`;
}

module.exports = generateMarkdown;
