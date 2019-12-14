const EC = protractor.ExpectedConditions;

class basicActions {
  async clickOnElement(element) {
    await browser.wait(EC.visibilityOf(element), 6000);
    return element.click();
  }

  async inputText(text, element) {
    await browser.wait(EC.visibilityOf(element), 6000);
    return element.sendKeys(text);
  }

  async checkStatusCode() {
    const browserLog = await browser.manage().logs().get('browser');
    for (let i = 0; i <= browserLog.length - 1; i++) {
      if (browserLog[i].level.value > 900) {
        console.log(browserLog[i].message);
        expect(browserLog[i].message).toEqual(false);
      }
    }
  }

  async checkTheLengthOfText(element) {
    const letter = await element.getText();
    if ((letter.split(' ').length) > 5) return true;
    return ('The length of container less than 5 world');
  }

  async clickEnter(element) {
    return element.sendKeys(protractor.Key.ENTER);
  }

  async waitForElement(element) {
    return browser.wait(EC.visibilityOf(element), 6000);
  }

  async getTextFromElement(element) {
    await browser.wait(EC.visibilityOf(element), 6000);
    return element.getText();
  }

  async checkCurrentDateInCalendar(date) {
    return $(`#tribe-events-daynum-${date < 10 ? (date.slice(1)) : date}-0`).getCssValue('background-color');
  }

  async openMainPageAndCleanAllCache(url) {
    await browser.get(url);
    await browser.executeScript('window.sessionStorage.clear();');
    return browser.executeScript('window.localStorage.clear();');
  }
}

module.exports = basicActions;
