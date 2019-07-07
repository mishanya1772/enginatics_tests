const element = require('../pageObjects/libraryElements');
const page = new (require('../pageObjects/helper'))();

describe('Library page', () => {
  beforeEach(() => browser.get('https://www.enginatics.com/library/'));

  it('Name table contains default 50 libraries', async () => {
    await page.waitForElement(element.listOfNamesLibrary.get(2));
    expect(await element.listOfNamesLibrary.count()).toBe(50);
    return page.checkStatusCode();
  });

  it('First library is opened after clicking on his name', async () => {
    await page.clickOnElement(element.listOfNamesLibrary.get(0));
    await page.waitForElement(element.backToLibraryButton);
    expect(await element.backToLibraryButton.isEnabled()).toBe(true);
    return page.checkStatusCode();
  });

  it('More/less links are enable', async () => {
    await page.clickOnElement(element.moreLink);
    await page.clickOnElement(element.lessLink);
    return page.checkStatusCode();
  });

  it("After choosing first category in column, it's added to category field", async () => {
    await page.clickOnElement(element.firstCategoriesInTable);
    await page.waitForElement(element.categoriesInCategoriesField);
    expect(await element.categoriesInCategoriesField.isEnabled()).toEqual(true);
    return page.checkStatusCode();
  });

  it('All categories in category field are deleted after clicking on X button', async () => {
    await page.clickOnElement(element.categoryFilterField);
    await page.clickOnElement(element.firstItemInCategoryFilter);
    await page.clickOnElement(element.deleteButtonForCategoryField);
    expect(await element.categoriesInCategoriesField.isPresent()).toEqual(false);
    return page.checkStatusCode();
  });

  it('XLS file has link for downloading', async () => {
    const link = element.allXLSDocuments.get(0);

    await page.waitForElement(element.allXLSDocuments.get(0));
    expect(link.getAttribute('href')).toContain('/example/');
    return page.checkStatusCode();
  });


  it('XML file has link for downloading', async () => {
    const link = element.allXMLDocuments.get(0);

    await page.waitForElement(element.allXMLDocuments.get(0));
    expect(link.getAttribute('href')).toContain('/xml/');
    return page.checkStatusCode();
  });

  it('200 libraries are displaying after choosing 200 in Show entries field', async () => {
    await page.inputText(200, element.showEntries);
    await page.waitForElement(element.listOfNamesLibrary.get(2));
    expect(await element.listOfNamesLibrary.count()).toBe(200);
    return page.checkStatusCode();
  });

  it('Opened the third page after choosing 2 in pagination', async () => {
    await page.clickOnElement(element.paginationThirdPage);
    expect(await browser.getCurrentUrl()).toBe('https://www.enginatics.com/library/?pg=3');
    return page.checkStatusCode();
  });

  it('Main spoiler is opened on main library page ', async () => {
    await page.clickOnElement(element.spoilerButton);
    await page.waitForElement(element.openedTextUnderTheSpoiler);
    return page.checkStatusCode();
  });

  it('Search field found the right library', async () => {
    const nameOfSecondLibrary = await page.getTextFromElement(element.listOfNamesLibrary.get(2));
    await page.inputText(nameOfSecondLibrary, element.searchField);
    await page.clickEnter(element.searchField);
    expect(await browser.getCurrentUrl()).toContain('/?pg=1&find=');
    return page.checkStatusCode();
  });

  it('URL has all items after filtering the libraries', async () => {
    await page.clickOnElement(element.paginationThirdPage);
    await page.clickOnElement(element.firstCategoriesInTable);
    const filterName = await page.getTextFromElement(element.firstCategoriesInTable);
    expect(await browser.getCurrentUrl()).toContain(filterName.slice(0, -1));
    expect(await browser.getCurrentUrl()).toContain('/?pg=3');
    return page.checkStatusCode();
  });

  it('Main spoiler is opened on main library page ', async () => {
    const catageroName = await page.getTextFromElement(element.firstCategoriesInTable);

    await page.clickOnElement(element.firstCategoriesInTable);
    await browser.sleep(1500); // need a little more time for writing test with smart Waiter
    // await page.waitForElement($('#reports_table_processing')); -- this element can help to delete browser.sleep

    const count = await element.allCategoriesInTable.count();
    for (let i = 0; i < count; i++) {
      expect(element.allCategoriesInTable.get(i).getText()).toContain(catageroName);
    }

    return page.checkStatusCode();
  });
});
