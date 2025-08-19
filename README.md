**Prerequisites**
Before you begin, ensure you have the following installed:

* Node.js: Version 20 or higher. You can download it from [nodejs.org](https://nodejs.org/).

**Installation**
**1. Clone the Repository:**

   `git clone [YOUR_REPOSITORY_URL_HERE]`
   
   `cd playwright # Or whatever your project's root folder is named`

(Replace `[YOUR_REPOSITORY_URL_HERE]` with the actual URL of your GitHub repository).

**2. Install Dependencies:**

    * Navigate to the root of the project (where `package.json` is located) and install the required Node.js packages: `npm install`

**3. Install Playwright Browsers:**

    * After installing the dependencies, install the Playwright browsers (Chromium, Firefox, WebKit): `npx playwright install --with-deps`



**! Running Tests !**

**Running Tests Locally**

  * To run all tests defined in the tests/ directory: `npm test`

**Running Specific Tests**

You can run a specific test file: `npx playwright test tests/formAuthentication.spec.ts`
