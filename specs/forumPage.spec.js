const element = require('../pageElements/forumElements');
const page = new (require('../common/baseObjects'))();
const data = require('../testData/baseData');

describe('On the Forum page', () => {
  beforeEach(() => page.openMainPageAndCleanAllCache(data.reportsPage));

  it('Popular Posts forms contain links', async () => {
    const count = await element.popularPostsForm.count();
    for (let i = 0; i < count; i++) {
      expect(element.popularPostsForm.get(i).getAttribute('href')).toContain(browser.baseUrl);
      page.checkStatusCode();
    }
  });

  it('Blog Archive and Recent Events have valid URLs', async () => {
    const count = await element.blogArchiveRecentEventsForums.count();
    for (let i = 0; i < count - 1; i++) {
      expect(element.blogArchiveRecentEventsForums.get(i).getAttribute('href')).toContain(browser.baseUrl);
      page.checkStatusCode();
    }
  });

  it("Search's data are displayed after entering it in the Search field and clinking on the ENTER", async () => {
    const nameOfPost = await page.getTextFromElement(element.firstPopularPostOnForm.get(0));
    await page.inputText(nameOfPost, element.searchField);
    await page.clickEnter(element.searchField);
    const nameAfterSearching = await page.getTextFromElement(element.firstPopularPostOnForm.get(0));

    expect(nameAfterSearching).toContain(nameOfPost);
    return page.checkStatusCode();
  });

  it('Categories are opened in a new page after clicking on it', async () => {
    const categoryName = await page.getTextFromElement(element.allCategories.get(0));
    await page.clickOnElement(element.allCategories.get(0));
    await page.waitForElement(element.allCategories.get(10));

    expect(await browser.getCurrentUrl()).toContain(categoryName.slice(0, -1));
    return page.checkStatusCode();
  });
});
