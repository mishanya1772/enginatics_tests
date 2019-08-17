exports.config = {
  framework: 'jasmine2',
  specs: ['../specs/*'],
  useAllAngular2AppRoots: true,
  protractor: true,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--window-size=1920,1080'],
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
