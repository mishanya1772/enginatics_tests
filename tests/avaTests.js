const test = require('ava');
const puppeteer = require('puppeteer');

// code accept, thread in computer
test('foo', async (t) => {
  //     browser.get('https://www.enginatics.com/events/');
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.google.com');
  await page.type('input[name="q"]', 'github mishanya1772');
  await page.keyboard.press('Enter');
  await page.click('h3 > div');
  await page.waitFor(3000);

  return t.pass();
});
