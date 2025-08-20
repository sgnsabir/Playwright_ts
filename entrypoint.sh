#!/bin/bash

echo "PLAYWRIGHT_HEADLESS: $PLAYWRIGHT_HEADLESS"
echo "PLAYWRIGHT_REPORTER: $PLAYWRIGHT_REPORTER"

if [ "$PLAYWRIGHT_HEADLESS" = "false" ]; then
  echo "Running in headed mode using xvfb..."
  xvfb-run --auto-servernum --server-args="-screen 0 1920x1080x24" \
    npx playwright test --headed --reporter="$PLAYWRIGHT_REPORTER"
else
  echo "Running in headless mode..."
  npx playwright test --reporter="$PLAYWRIGHT_REPORTER"
fi

# Generate and serve Allure report
allure generate allure-results --clean -o allure-report
allure open allure-report --port 5000 --host 0.0.0.0
