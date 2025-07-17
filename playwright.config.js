// @ts-check
const { defineConfig, devices } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './tests-playwright',
  fullyParallel: true,
  reporter: 'html',
  use: {
    baseURL: process.env.CI ? 'http://localhost:5000' : 'http://localhost:8080',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: process.env.CI ? 'npm run start-prod' : 'npm start',
    url: process.env.CI ? 'http://localhost:5000' : 'http://localhost:8080',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
})

