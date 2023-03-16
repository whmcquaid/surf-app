const puppeteer = require("puppeteer");

async function scrapePage(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$$(
    "body > div.cover > div.cover-inner > div.pages.clear-left.clear-right > div > div.msw-fc.msw-js-forecast > div:nth-child(2) > div:nth-child(2) > div > div > div.msw-col-fluid > div > div.row.margin-bottom > div.col-lg-7.col-md-7.col-sm-12.col-xs-12.msw-fc-current > div > div.col-lg-7.col-md-7.col-sm-7.col-xs-12 > ul.rating.rating-large.clearfix > li.rating-text.text-dark"
  );
  const size = await el.getProperty("textContent");
  let sizeFt = await size.jsonValue();
  sizeFt = sizeFt.trim();

  const [el2] = await page.$$(
    "body > div.cover > div.cover-inner > div.pages.clear-left.clear-right > div > div.msw-fc.msw-js-forecast > div:nth-child(2) > div:nth-child(2) > div > div > div.msw-col-fluid > div > div.row.margin-bottom > div.col-lg-7.col-md-7.col-sm-12.col-xs-12.msw-fc-current > div > div.col-lg-7.col-md-7.col-sm-7.col-xs-12 > p"
  );
  const wind = await el2.getProperty("textContent");
  let windSpeedDir = await wind.jsonValue();
  windSpeedDir = windSpeedDir.trim();

  const [el3] = await page.$$(
    "body > div.cover > div.cover-inner > div.pages.clear-left.clear-right > div > div.msw-fc.msw-js-forecast > div.container-fluid.container-fluid-margin-lg > div > header > div.fluid-column > h1"
  );
  const location = await el3.getProperty("textContent");
  let breakLoc = await location.jsonValue();
  breakLoc = breakLoc.slice(0, breakLoc.indexOf("Surf")).trim();

  const [el4] = await page.$$(
    "body > div.cover > div.cover-inner > div.pages.clear-left.clear-right > div > div.msw-fc.msw-js-forecast > div:nth-child(2) > div:nth-child(2) > div > div > div.msw-col-fluid > div > div.row.margin-bottom > div.col-lg-5.col-md-5.col-sm-12.col-xs-12 > div > div:nth-child(2) > div > div:nth-child(1) > table > tbody > tr:nth-child(1) > td:nth-child(2)"
  );
  const tide1 = await el4.getProperty("textContent");
  let tide_1 = await tide1.jsonValue();
  tide_1 = tide_1.trim();

  const [el5] = await page.$$(
    "body > div.cover > div.cover-inner > div.pages.clear-left.clear-right > div > div.msw-fc.msw-js-forecast > div:nth-child(2) > div:nth-child(2) > div > div > div.msw-col-fluid > div > div.row.margin-bottom > div.col-lg-5.col-md-5.col-sm-12.col-xs-12 > div > div:nth-child(2) > div > div:nth-child(1) > table > tbody > tr:nth-child(1) > td:nth-child(1) > strong"
  );
  const tide1txt = await el5.getProperty("textContent");
  let tide1_txt = await tide1txt.jsonValue();
  tide1_txt = tide1_txt.trim();

  const [el6] = await page.$$(
    "body > div.cover > div.cover-inner > div.pages.clear-left.clear-right > div > div.msw-fc.msw-js-forecast > div:nth-child(2) > div:nth-child(2) > div > div > div.msw-col-fluid > div > div.row.margin-bottom > div.col-lg-5.col-md-5.col-sm-12.col-xs-12 > div > div:nth-child(2) > div > div:nth-child(1) > table > tbody > tr:nth-child(2) > td:nth-child(2)"
  );
  const tide2 = await el6.getProperty("textContent");
  let tide_2 = await tide2.jsonValue();
  tide_2 = tide_2.trim();

  const [el7] = await page.$$(
    "body > div.cover > div.cover-inner > div.pages.clear-left.clear-right > div > div.msw-fc.msw-js-forecast > div:nth-child(2) > div:nth-child(2) > div > div > div.msw-col-fluid > div > div.row.margin-bottom > div.col-lg-5.col-md-5.col-sm-12.col-xs-12 > div > div:nth-child(2) > div > div:nth-child(1) > table > tbody > tr:nth-child(2) > td:nth-child(1) > strong"
  );
  const tide2txt = await el7.getProperty("textContent");
  let tide2_txt = await tide2txt.jsonValue();
  tide2_txt = tide2_txt.trim();

  browser.close();
  return {
    break: breakLoc,
    waveHeight: sizeFt,
    wind: windSpeedDir,
    tide_1: `${tide1_txt} ${tide_1}`,
    tide_2: `${tide2_txt} ${tide_2}`,
    date: Date.now(),
    url: url,
  };
}
module.exports = scrapePage;
