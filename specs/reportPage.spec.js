const element = require('../pageElements/libraryElements');
const page = new (require('../common/baseObjects'))();
const reportElement = require('../pageElements/reportElements');
const data = require('../testData/baseData');

describe('On the Report page', () => {
  beforeEach(() => page.openMainPageAndCleanAllCache(data.libraryPage));

  it('Back to library link has URL with all filtering items', async () => {
    await page.clickOnElement(element.firstCategoriesInTable);
    await page.waitForElement(element.flipSwitchLabel);
    const url = await browser.getCurrentUrl();
    await page.clickOnElement(element.spoilerButton);
    await page.clickOnElement(element.listOfNamesLibrary.get(0));
    await page.waitForElement(element.flipSwitchLabel);

    expect(await reportElement.usernameField.getAttribute('href')).toEqual(url);
    return page.checkStatusCode();
  });

  it('All sorted libraries are displayed after choosing the category', async () => {
    await page.clickOnElement(element.listOfNamesLibrary.get(0));
    const categoryName = await page.getTextFromElement(reportElement.categoryOnDescForm);
    await page.clickOnElement(reportElement.categoryOnDescForm);

    expect(await browser.getCurrentUrl()).toContain(data.libraryPage);
    expect(await browser.getCurrentUrl()).toContain(categoryName);
    return page.checkStatusCode();
  });

  it('Script has ETRM/Library mark after choosing ETRM/Library', async () => {
    await page.clickOnElement(element.listOfNamesLibrary.get(0));
    await page.clickOnElement(reportElement.etrmLibraryFilter);

    expect(reportElement.etrmLibraryMark.getAttribute('href')).toContain(data.libraryPage);
    await page.clickOnElement(reportElement.etrmLibraryFilter);
    expect(reportElement.etrmLibraryMark.getAttribute('href')).toContain('http://etrm.oracle.com/pls/etrm');
    return page.checkStatusCode();
  });

  it('XLS file has link for downloading', async () => {
    await page.clickOnElement(element.listOfNamesLibrary.get(0));
    const link = reportElement.xlsFile.getAttribute('href');

    expect(link).toContain('/example/');
    return page.checkStatusCode();
  });

  it('XML file has link for downloading', async () => {
    await page.clickOnElement(element.listOfNamesLibrary.get(0));
    const link = reportElement.xmlFile.getAttribute('href');

    expect(link).toContain('/xml/');
    return page.checkStatusCode();
  });

  /**
   *There is an issue with the askAQuestion button. Locator for this button can change
   * */
  it('Forum is opened afer clicking on As a question button', async () => {
    await page.clickOnElement(element.listOfNamesLibrary.get(0));
    await page.clickOnElement(reportElement.askAQuestionButton);

    expect(await browser.getCurrentUrl()).toContain(`${browser.baseUrl}/topic/`);
    expect(await reportElement.submitButton.isPresent()).toEqual(true);
    return page.checkStatusCode();
  });

  it('Related Blitz Reports form has no broken links', async () => {
    await page.clickOnElement(element.listOfNamesLibrary.get(0));
    const count = await reportElement.relatedBlitzReportsLinks.count();
    for (let i = 0; i < count; i++) {
      expect(browser.getCurrentUrl()).toContain(data.reportsPage);
    }

    return page.checkStatusCode();
  });
});
