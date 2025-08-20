Inside that directory, you can run several commands:

npx playwright test
Runs the end-to-end tests.

npx playwright test --ui
Starts the interactive UI mode.

npx playwright test --project=chromium
Runs the tests only on Desktop Chrome.

npx playwright test example
Runs the tests in a specific file.

npx playwright test --debug
Runs the tests in debug mode.

npx playwright codegen
Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:

- .\tests\example.spec.ts - Example end-to-end test
- .\tests-examples\demo-todo-app.spec.ts - Demo Todo App end-to-end tests
- .\playwright.config.ts - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

"scripts": {
"runCommand": "docker-compose run --rm playwright npm run regression",
"runall": "docker-compose run --rm playwright npx playwright test --reporter=line,allure-playwright",
"regression": "docker-compose run --rm playwright npx playwright test tests/Placeorder.spec.js --headed --reporter=line,allure-playwright",
"webTests": "docker-compose run --rm playwright npx playwright test --grep '@web' --reporter=line,allure-playwright",
"safariNewconfig": "docker-compose run --rm playwright npx playwright test --config playwright.config1.js --project=safari --reporter=line,allure-playwright",
"chromeNewconfig": "docker-compose run --rm playwright npx playwright test --config playwright.config1.js --project=chrome --reporter=line,allure-playwright",
"cucumberRegression": "docker-compose run --rm playwright npx cucumber-js --tags '@Regression' --retry 1 --exit --format html:cucumber-report.html",

"docker": "PLAYWRIGHT_BROWSER=firefox PLAYWRIGHT_HEADLESS=true PLAYWRIGHT_REPORTER=allure-playwright docker-compose up --build",
"docker:rerun": "PLAYWRIGHT_BROWSER=firefox PLAYWRIGHT_HEADLESS=true PLAYWRIGHT_REPORTER=allure-playwright docker-compose up"
}
npm run docker
npm run docker:rerun

# docker-compose

docker build -t playwright-tests:latest .

<!--
services:
  playwright-custom:
    build: .
    container_name: playwright-custom
    working_dir: /app
    volumes:
      - .:/app
    ports:
      - "5000:5000" # Allure report UI
    environment:
      - NODE_ENV=development
      - PLAYWRIGHT_BROWSER=${PLAYWRIGHT_BROWSER}
      - PLAYWRIGHT_HEADLESS=${PLAYWRIGHT_HEADLESS}
      - PLAYWRIGHT_REPORTER=${PLAYWRIGHT_REPORTER}
    command: sh -c "npx playwright test --browser=${PLAYWRIGHT_BROWSER} --headed=${PLAYWRIGHT_HEADLESS} --reporter=${PLAYWRIGHT_REPORTER} && allure generate allure-results --clean -o allure-report && allure open allure-report --port 5000 --host 0.0.0.0"
 -->
