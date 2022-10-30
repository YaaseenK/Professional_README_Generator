// packages for app
const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT') {
      badge = '(https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)'
  } else if (license === 'Apache 2.0') {
      badge = '(https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else if (license === 'GPL v3.0') {
      badge = '(https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else {
    badge = ""
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function that returns the license link
function renderLicenseLink(license) {
  let licenseLink = '';
    if(license === 'MIT') {
      licenseLink = 'https://choosealicense.com/licenses/mit/'
    } else if (license === 'Apache 2.0') {
      licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
    } else if (license === 'GPL v3.0') {
      licenseLink = 'https://www.gnu.org/licenses'
    } else {
      licenseLink = ""
    }
    return licenseLink;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection =
    ` ${license} `
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return`
  # ${data.title}
  
  ## Description 
   * Motivation:
    ${data.description_q1}
   * Build information:
    ${data.description_q2}
   * Problem and solutions:
    ${data.description_q3}
   * Knowledge:
    ${data.description_q4}

  ## Table of Contents:
   * [Description](#description)
   * [License](#license)
   * [Installation](#installation)
   * [Usage](#usage)
   * [Credits](#Credits)
   * [Tests](#tests)
   * [Questions](#questions)

  ## Installation:
   You must install the following for this app to function:
   ${data.installation}

  ## Usage:
  	![alt text]()
   ${data.usage}

  ## Credits:
   ${data.credits}

  ## License:
  ${renderLicenseSection(data.license)} [![GitHub license]${renderLicenseBadge(data.license)}"
    

  ## Tests:
   Run the following commands in your terminal to test this app:
   ${data.tests}

  ## Contact Info:
   Github: https://github.com/${data.github}
   Email: ${data.email}
`;
}

// exports
module.exports = generateMarkdown;

