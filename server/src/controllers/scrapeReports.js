const Report = require("../models/reports");
const magicScrape = require("../scraper/magicScrape");

const getReportIdsByBreak = async () => {
  const reports = await Report.find();
  return reports.map((report) => {
    let breakloc = report.break;
    let id = report._id;
    let obj = {};
    obj[breakloc] = id;
    return obj;
  });
};

async function scrapeAndSave() {
  const URLS = {
    ob: "https://magicseaweed.com/Ocean-Beach-Surf-Report/255/",
    pac: "https://magicseaweed.com/Pacifica-Pier-Surf-Report/8092/",
    mav: "https://magicseaweed.com/Mavericks-Half-Moon-Bay-Surf-Report/162/",
    lmar: "https://magicseaweed.com/Linda-Mar-Pacifica-Surf-Report/819/",
    stin: "https://magicseaweed.com/Stinson-Beach-Surf-Report/4216/",
    mar: "https://magicseaweed.com/Marin-County-Surf-Report/307/",
    bol: "https://magicseaweed.com/Bolinas-Surf-Report/4221/",
  };

  const reportsById = await getReportIdsByBreak();

  for (const url in URLS) {
    const data = await magicScrape(URLS[url]);
    const report = new Report(data);
    await report.save();
  }
  for await (let idObj of reportsById) {
    let id = Object.values(idObj);
    console.log(id);
    // const oldReport = await Report.findById(id[0]);
    // console.log(oldReport);
    const res = await Report.deleteOne({ _id: id[0] });
    console.log(res);
  }
}

module.exports = scrapeAndSave;
