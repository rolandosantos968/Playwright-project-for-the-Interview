# Playwright-Project-for-the-Interview

## Description
This is an automation project for an interview. It includes test cases related to the login and logout of a page. It was design using TypeScript and Playwright. The .env document was included for ease of execution.

## Requirements
- **NodeJS**: Necessary for executing JavaScript projects. It can be downloaded from their official page: https://nodejs.org/en
- **Visual Studio Code**: Recomended code editor for development. It can be downlaoded from their official page: https://code.visualstudio.com/
- **Google Chrome**: The project is set to run using chromium.

## Instalation
- In VS Code, open the project.
- Open a new terminal using the Terminal window or Ctrl+Shift+`.
- Clone this repository with: `git clone https://github.com/rolandosantos968/Playwright-project-for-the-Interview.git`
- Navigate to the project folder: `cd Playwright-Project-for-the-Interview`
- Run the next command: `npm install`
- Then, run the next command: `npx playwright install`

## Running the tests
In the console:
- For running all the tests available: `npx playwright test`
- For running all the tests available with the browser open: `npx playwright test --headed`
- For running specific tests: `npx playwright test -g "testname"`
- For running specific tests and debugging: `npx playwright test -g "testname" --debug`