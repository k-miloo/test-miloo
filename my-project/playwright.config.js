// playwright.config.js
module.exports = {
    timeout: 60000, 
    use: {
      headless: false, 
      viewport: { width: 1280, height: 720 }, 
      ignoreHTTPSErrors: true, 
      launchOptions: {
        slowMo: 50 
      }
    }
  };