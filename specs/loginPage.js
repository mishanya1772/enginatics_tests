const element = require('../pageObjects/accountPage');
const page = new (require('../pageObjects/helper'))();
const data = require('../testData/baseData');

describe('Login Page', () => {
  beforeEach(() => {
    browser.get('https://www.enginatics.com/wp-admin/');
    browser.executeScript('window.sessionStorage.clear();');
    return browser.executeScript('window.localStorage.clear();');
  });

  xit('Google calendar is synced after clicking on Sync Now button', async () => { // invalid credentials
    await page.inputText(data.username, element.usernameField);
    await page.inputText(data.password, element.passwordField);
    await page.clickOnElement(element.loginButton);
    await page.clickOnElement(element.GCalendarSyncLink);
    await page.clickOnElement(element.sync_NowButton);
    return page.checkStatusCode();
  });
});
