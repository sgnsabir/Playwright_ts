# Playwright Test Automation Framework

This is a test automation framework using Playwright with TypeScript. It's designed to be easy to use and set up for end-to-end testing of web applications.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
  - [Local Execution](#local-execution)
  - [Docker Execution](#docker-execution)
- [Reporting](#reporting)
- [Scripts Overview](#scripts-overview)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
- [Docker](https://www.docker.com/products/docker-desktop) (for running tests in a containerized environment)

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/sgnsabir/Playwright_ts.git
    cd Playwright_ts
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Install Playwright browsers:**
    ```bash
    npx playwright install
    ```

## Configuration

The framework can be configured using the `playwright.config.ts` file. You can define different test projects, browsers, and other settings in this file. For running tests with a different configuration, you can use `playwright.config1.js` as an example.

For environment-specific variables, you can use a `.env` file. Create a `.env` file in the root of the project and add your variables. For example:

```
BASE_URL=https://your-app-url.com
USERNAME=your-username
PASSWORD=your-password
```

## Running Tests

This framework provides several scripts to run tests in different modes and environments.

### Local Execution

- **Run all tests:**

  ```bash
  npm run runall
  ```

  This command runs all tests and generates an Allure report.

- **Run regression tests:**

  ```bash
  npm run regression
  ```

  This runs the `Placeorder.spec.js` test in headed mode with Allure reporting.

- **Run tests with a specific tag:**

  ```bash
  npm run webTests
  ```

  This command runs tests that are tagged with `@web`.

- **Run tests with a different configuration file:**

  - **Safari:**
    ```bash
    npm run safariNewconfig
    ```
  - **Chrome:**
    ```bash
    npm run chromeNewconfig
    ```

- **Run Cucumber tests:**
  ```bash
  npm run cucumberRegression
  ```
  This runs Cucumber scenarios with the `@Regression` tag and generates an HTML report.

### Docker Execution

- **Build and run tests in Docker:**

  ```bash
  npm run docker
  ```

- **Re-run tests in Docker:**

  ```bash
  npm run docker:rerun
  ```

- **Run tests in Firefox (Docker):**

  ```bash
  npm run docker:firefox
  ```

- **Re-run tests in Firefox (Docker):**

  ```bash
  npm run docker:rerun-firefox
  ```

- **Run tests in Safari (Docker):**

  ```bash
  npm run docker:safari
  ```

- **Re-run tests in Safari (Docker):**
  ```bash
  npm run docker:rerun-safari
  ```

## Reporting

This framework uses [Allure](https://docs.qameta.io/allure/) for test reporting. After running tests with an Allure reporter, the results will be available in the `allure-results` directory.

To generate and open the Allure report, run the following commands:

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

For Cucumber tests, an HTML report is generated as `cucumber-report.html`.

## Scripts Overview

- `runCommand`: A wrapper script that runs the `regression` script.
- `runall`: Runs all Playwright tests.
- `regression`: Runs a specific regression test file.
- `webTests`: Runs tests with the `@web` tag.
- `safariNewconfig` / `chromeNewconfig`: Runs tests with a secondary config file.
- `cucumberRegression`: Runs Cucumber tests.
- `docker` scripts: A set of scripts for running tests within Docker containers.
- `generate:testSetup`: A script to generate test setup files.
- `watch:testSetup`: Watches for changes and regenerates test setup files.

## Dependencies

### Main Dependencies

- `@faker-js/faker`: For generating fake data for tests.
- `csv`: For parsing CSV files.
- `dotenv`: For managing environment variables.

### Development Dependencies

- `@playwright/test`: The core Playwright test runner.
- `@types/node`: TypeScript definitions for Node.js.
- `allure-playwright`: Allure reporter for Playwright.
- `cross-env`: To set environment variables across different platforms.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/YourFeature`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/YourFeature`).
5.  Open a pull request.

## License

This project is licensed under the ISC License.
