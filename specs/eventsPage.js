const element = require('../pageObjects/eventElements');
const page = new (require('../pageObjects/helper'))();

describe('Event page', () => {
  beforeEach(() => {
    browser.get('https://www.enginatics.com/events/');
    browser.executeScript('window.sessionStorage.clear();');
    browser.executeScript('window.localStorage.clear();');
  });

  it('Event with selected date is displayed after entering it.', async () => {
    await page.inputText('2018-05', element.fieldForDate);
    await page.clickEnter(element.fieldForDate);
    await browser.sleep(700);
    await page.clickOnElement(element.arrowToRight);
    await page.clickOnElement(element.allevenets.get(0));
    const startDateOfEvent = await page.getTextFromElement(element.eventDateStart);

    expect(startDateOfEvent).toContain('May 16, 2018');
    expect(element.backToCalendarLing.getAttribute('href')).toContain('events/2018-05');
    return page.checkStatusCode();
  });

  it('List with all events is displayed with pictures after entering it.', async () => {
    await page.clickOnElement(element.monthButton);
    await page.clickOnElement(element.listButton);
    const countOfPictures = await element.allPicturesFromEvents.count();
    for (let i = 0; i < countOfPictures; i++) {
      expect(element.allPicturesFromEvents.get(i).getAttribute('src')).toContain('https://www.enginatics.com/wp-content/uploads/');
    }
    return page.checkStatusCode();
  });

  it('List it.', async () => {
    await page.clickOnElement(element.monthButton);
    await page.clickOnElement(element.listButton);
    await page.clickOnElement(element.linksOfAllEvents.get(0));

    return page.checkStatusCode();
  });
});
