const page = new (require('../pageObjects/helper'))();
const supportElement = require('../pageObjects/supportElements');

describe('Support page', () => {
  beforeEach(() => {
    browser.get('https://www.enginatics.com/support/');
    browser.executeScript('window.sessionStorage.clear();');
    return browser.executeScript('window.localStorage.clear();');
  });

  it('Privacy Policy is opened', async () => {
    await page.clickOnElement(supportElement.privacyPoliceLink);
    expect(browser.getCurrentUrl()).toBe('https://www.enginatics.com/privacy-policy/');
    return page.checkStatusCode();
  });

  it('Licence Agreement is opened', async () => {
    await page.clickOnElement(supportElement.licenceAgreementLink);
    await page.waitForElement(supportElement.licenceAgreementForm);
    return page.checkStatusCode();
  });

  it('Mandatory fields are highlighted after trying to send message without filling fields', async () => {
    await page.clickOnElement(supportElement.sendButton);
    await page.waitForElement(supportElement.firstNameIsRequiredNotif);
    const textMainError = await page.getTextFromElement(supportElement.mainErrorValidation);

    expect(supportElement.firstNameIsRequiredNotif.isPresent()).toEqual(true);
    expect(supportElement.lastNameIsRequiredNotif.isPresent()).toEqual(true);
    expect(supportElement.emailIsRequiredNotif.isPresent()).toEqual(true);
    expect(supportElement.companyNameIsRequiredNotif.isPresent()).toEqual(true);
    expect(textMainError).toEqual('Please fill in all required fields and try again.');
    return page.checkStatusCode();
  });

  it('Privacy and Agreement are mandatory field and highlighted after trying to send message without marking it', async () => {
    await page.inputText('test', await supportElement.firstNameIsRequiredField);
    await page.inputText('test', supportElement.lastNameIsRequiredField);
    await page.inputText('test@test.com', supportElement.emailIsRequiredField);
    await page.inputText('test', supportElement.companyNameIsRequiredField);

    await page.clickOnElement(supportElement.sendButton);
    const textMainError = await page.getTextFromElement(supportElement.mainErrorValidation);
    expect(textMainError).toEqual('Please fill in all required fields and try again.');
    return page.checkStatusCode();
  });
});
