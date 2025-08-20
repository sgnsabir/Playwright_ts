import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./src/tests",
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  retries: 2,
  workers: 3,

  reporter: [["line"], ["allure-playwright"]],
  //["html"] currently not require
  projects: [
    // Chromium
    {
      name: "chrome",
      use: {
        browserName: "chromium",
        headless: false,
        ignoreHTTPSErrors: true,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        trace: "retain-on-failure",
        permissions: ["geolocation"],
        viewport: null, // Don't set fixed viewport
        launchOptions: {
          args: ["--start-maximized"], // Maximize window
        },
      },
    },

    // Firefox
    {
      name: "firefox",
      use: {
        browserName: "firefox",
        headless: false,
        ignoreHTTPSErrors: true,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        trace: "retain-on-failure",
        permissions: ["geolocation"],
        viewport: null,
        launchOptions: {
          args: ["--start-maximized"],
        },
      },
    },

    // Safari-like (WebKit) with iPhone 11
    {
      name: "safari",
      use: {
        browserName: "webkit",
        headless: false,
        ignoreHTTPSErrors: true,
        screenshot: "only-on-failure",
        trace: "retain-on-failure",
        permissions: ["geolocation"],
        ...devices["iPhone 11"],
      },
    },
  ],
});
