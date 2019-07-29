const element = require('../pageObjects/eventElements');
const page = new (require('../pageObjects/helper'))();
const data = require('../testData/baseData');

describe('Event page', () => {
  beforeEach(() => {
    browser.get('https://www.enginatics.com/events/');
    browser.executeScript('window.sessionStorage.clear();');
    browser.executeScript('window.localStorage.clear();');
  });

  it('Event with selected date is displayed after entering it.', async () => {
    await element.fieldForDate.clear();
    await page.inputText('2018-05', element.fieldForDate);
    await page.clickEnter(element.fieldForDate);
    await page.waitForElement(element.allDatesInCalendar.get(0));
    await page.clickOnElement(element.arrowToRight);
    await page.waitForElement(element.allDatesInCalendar.get(0));
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
      expect(element.allPicturesFromEvents.get(i).getAttribute('src')).toContain(data.eventsPicturesHref);
    }
    return page.checkStatusCode();
  });

  it('Social media links have right links for events', async () => {
    await page.clickOnElement(element.monthButton);
    await page.clickOnElement(element.listButton);
    await page.clickOnElement(element.linksOfAllEvents.get(0));
    expect(element.facebookLink.getAttribute('href')).toContain(data.shareFacebookHref);
    expect(element.linkedinLink.getAttribute('href')).toContain(data.shareLinkedinHref);
    expect(element.emailLink.getAttribute('href')).toContain(data.shareEmalHref);
    return page.checkStatusCode();
  });

  it('Calendar display current date', async () => {
    const today = new Date();
    const date = String(today.getDate()).padStart(2, '0');
    const cssValue = await page.checkCurrentDateInCalendar(date);
    expect(cssValue).toBe('rgba(240, 4, 2, 1)');

    return page.checkStatusCode();
  });
});
