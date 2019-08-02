exports.config = {
  framework: 'jasmine2',
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  // specs: ['./specs/*'],
  useAllAngular2AppRoots: true,
  protractor: true,
  multiCapabilities: [
    {
      shardTestFiles: true,
      maxInstances: 1,
      sequential: true,
      browserName: 'chrome',
      specs: ['./specs/eventsPage.js', './specs/forumPage.js', './specs/libraryPage.js'],
    },
    {
      shardTestFiles: true,
      maxInstances: 1,
      sequential: true,
      browserName: 'chrome',
      specs: ['./specs/supportPage.js', './specs/pricingPage.js', './specs/reportPage.js',
      ],
    }],
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
