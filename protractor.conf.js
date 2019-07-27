exports.config = {
  // directConnect: true,
  framework: 'jasmine2',
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./specs/*'],
  useAllAngular2AppRoots: true,
  protractor: true,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--window-size=1920,1080'], //   args: ['no-sandbox', '--headless'],
    },
    maxInstances: 2,
  },
  jasmineNodeOpts: {
    showColors: true,
  },

  onPrepare() {
    const AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results',
    }));
    browser.ignoreSynchronization = true;
  },
};
