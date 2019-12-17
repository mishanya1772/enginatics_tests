const page = new (require('../common/baseObjects'))();
const data = require('../testData/baseData');

describe('On the Pricing page', () => {
  beforeEach(() => page.openMainPageAndCleanAllCache(data.pricingPage));

  it('All main links are opened in Header without errors', async () => {
    const headerLinks = [page.blitzReport, page.library, page.resources, page.aboutUs,
      page.contactUs];

    return headerLinks.forEach((link) => {
      page.clickByNameFromList(link, page.linksInHeader);
      page.checkStatusCode();
    });
  });

  xit("FAQ's list is opened and contains valid text", () => { // there is no FAQ's
    const linksOfFAQ = [page.firstFAQ];
    const textsofFAQ = [page.textForFirstFAQ];

    for (let i = 0; i < linksOfFAQ.length; i++) {
      page.clickOnElement(linksOfFAQ[i]);
      page.checkStatusCode();
      expect(page.checkTheLengthOfText(textsofFAQ[i].get(0))).toBe(true);
    }
  });

  it('Main links are opened in the bottom', () => {
    for (let i = 0; i < 5; i++) {
      page.clickOnElement(page.forCustomerColumn.get(i));
      page.checkStatusCode();
    }
  });
});
