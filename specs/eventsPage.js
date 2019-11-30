const element = require('../pageObjects/eventElements');
const page = new (require('../pageObjects/helper'))();
const data = require('../testData/baseData');

describe('On the Event page', () => {
  beforeEach(() => page.openMainPageAndCleanAllCache(data.eventsPage));

  it('Event with selected date is displayed after entering it.', async () => {
    await element.fieldForDate.clear();
    await page.inputText('2018-05', element.fieldForDate);
    await page.clickEnter(element.fieldForDate);

    await page.clickOnElement(element.arrowToRight);
    await page.waitForElement(element.allDatesInCalendar.get(2));
    await page.clickOnElement(element.allevenets.get(0));
    const startDateOfEvent = await page.getTextFromElement(element.eventDateStart);

    expect(startDateOfEvent).toContain('June 10, 2018');
    expect(element.backToCalendarLing.getAttribute('href')).toContain('events/2018-06');
    return page.checkStatusCode();
  });

  it('List with all events is displayed with pictures after entering it.', async () => {
    await page.clickOnElement(element.monthButton);
    await page.clickOnElement(element.listButton);
    const countOfPictures = await element.allPicturesFromEvents.count();

    await page.waitForElement(element.allPicturesFromEvents.get(3));
    for (let i = 0; i < countOfPictures / 3; i++) {
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

  it('Calendar displays current date', async () => {
    const today = new Date();
    const date = String(today.getDate()).padStart(2, '0');
    const cssValue = await page.checkCurrentDateInCalendar(date);

    expect(cssValue).toBe('rgba(240, 4, 2, 1)');
    return page.checkStatusCode();
  });
});
