const element = require('../pageObjects/commonElements');
const page = new (require('../pageObjects/helper'))();
const data = require('../testData/baseData');

describe('On the Pricing page', () => {
  beforeEach(() => page.openMainPageAndCleanAllCache(data.pricingPage));

  it('All main links are opened in Header', () => {
    const headerLinks = [element.blitzReport, element.library, element.resources,
      element.about, element.contactUs];

    for (let i = 0; i < headerLinks.length; i++) {
      page.clickOnElement(headerLinks[i]);
      page.checkStatusCode();
    }
  });

  xit("FAQ's list is opened and contains valid text", () => { // there is no FAQ's
    const linksOfFAQ = [element.firstFAQ];
    const textsofFAQ = [element.textForFirstFAQ];

    for (let i = 0; i < linksOfFAQ.length; i++) {
      page.clickOnElement(linksOfFAQ[i]);
      page.checkStatusCode();
      expect(page.checkTheLengthOfText(textsofFAQ[i].get(0))).toBe(true);
    }
  });

  it('Main links are opened in the bottom', () => {
    for (let i = 0; i < 5; i++) {
      page.clickOnElement(element.forCustomerColumn.get(i));
      page.checkStatusCode();
    }
  });
});
