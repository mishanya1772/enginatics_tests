const element = require('../pageObjects/commonElements');
const page = new (require('../pageObjects/helper'))();

describe('Pricing page', () => {
  beforeEach(() => browser.get('https://www.enginatics.com/pricing/'));

  it('Open main links in Header', () => {
    const headerLinks = [element.blitzReport, element.library, element.resources,
      element.about, element.contactUs];

    for (let i = 0; i < headerLinks.length; i++) {
      page.clickOnElement(headerLinks[i]);
      page.checkStatusCode();
    }
  });

  it("Open FAQ's list and check texts", () => {
    const linksOfFAQ = [element.firstFAQ];
    const textsofFAQ = [element.textForFirstFAQ];

    for (let i = 0; i < linksOfFAQ.length; i++) {
      page.clickOnElement(linksOfFAQ[i]);
      page.checkStatusCode();
      expect(page.checkTheLengthOfText(textsofFAQ[i].get(0))).toBe(true);
    }
  });

  it('Open main links in buttom', () => {
    for (let i = 0; i < 5; i++) {
      page.clickOnElement(element.forCustomerColumn.get(i));
      page.checkStatusCode();
    }
  });
});
