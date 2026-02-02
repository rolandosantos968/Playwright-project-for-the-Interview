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
- For running all the tests available: `npm run test` or `npx playwright test`
- For running all the tests available with the browser open: `npm run headed` or `npx playwright test --headed`
- For running specific tests:`npm run case "testname"` or `npx playwright test -g "testname"`
- For running specific tests and debugging:`npm run debug "testname"` or `npx playwright test -g "testname" --debug`
- For running the report of execution: `npm run debug report` or `npx playwright show-report`