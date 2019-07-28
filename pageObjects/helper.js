const EC = protractor.ExpectedConditions;

class basicActions {
  async clickOnElement(element) {
    await browser.wait(EC.visibilityOf(element), 6000);
    return element.click();
  }

  async inputText(text, element) {
    await browser.wait(EC.visibilityOf(element), 6000);
    return element.clear().sendKeys(text);
  }

  checkStatusCode() {
    browser.manage().logs().get('browser').then((browserLog) => {
      for (let i = 0; i <= browserLog.length - 1; i++) {
        if (browserLog[i].level.value > 900) {
          console.log(browserLog[i].message);
          expect(browserLog[i].message).toEqual(false);
        }
      }
    });
  }

  checkTheLengthOfText(element) {
    return element.getText().then((letter) => {
      if ((letter.split(' ').length) > 5) return true;
      throw 'The length of container less than 5 world';
    });
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
}

module.exports = basicActions;
