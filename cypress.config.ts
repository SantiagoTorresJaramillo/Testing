import { defineConfig } from "cypress"

export default defineConfig({
  projectId: '',
    videoCompression: false,
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    responseTimeout: 30000,
    viewportWidth: 1280,
    viewportHeight: 720,
  e2e: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setupNodeEvents(on, config) {
    },
    retries: {
      runMode: 3,
      openMode: 0,
    }
  },
})
