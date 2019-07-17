const element = require('../pageObjects/forumElements');
const page = new (require('../pageObjects/helper'))();

describe('Forum page', () => {
  beforeEach(() => {
    browser.get('https://www.enginatics.com/forums/forum/reports/');
    browser.executeScript('window.sessionStorage.clear();');
    browser.executeScript('window.localStorage.clear();');
  });

  it('Popular Posts forms contains links', async () => {
    const count = await element.popularPostsForm.count();
    for (let i = 0; i < count; i++) {
      expect(element.popularPostsForm.get(i).getAttribute('href')).toContain('https://www.enginatics.com/');
      page.checkStatusCode();
    }
  });

  it('Blog Archive and Recent Events have urls', async () => {
    const count = await element.blogArchiveRecentEventsForums.count();
    for (let i = 0; i < count - 1; i++) {
      expect(element.blogArchiveRecentEventsForums.get(i).getAttribute('href')).toContain('https://www.enginatics.com/');
      page.checkStatusCode();
    }
  });

  it("Search's data is displayed after entering this data in Search field and clinking on ENTER", async () => {
    const nameOfPost = await element.firstPopularPostOnForm.getText();
    await page.inputText(nameOfPost, element.searchField);
    await page.clickEnter(element.searchField);
    expect(element.headerOfSearchPage.getText()).toContain(nameOfPost);
    return page.checkStatusCode();
  });

  it('Categories is opened in a new page after clicking on it', async () => {
    await page.clickOnElement(element.allTopics.get(0));
    const categoryName = await page.getTextFromElement(element.allCategories.get(0));
    await page.clickOnElement(element.allCategories.get(0));
    expect(browser.getCurrentUrl()).toContain(categoryName);
    return page.checkStatusCode();
  });
});
