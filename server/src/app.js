/* eslint-disable no-undef */
const updateReports = require("./magicScrape");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const URLS = {
  ob: "https://magicseaweed.com/Ocean-Beach-Surf-Report/255/",
  pac: "https://magicseaweed.com/Pacifica-Pier-Surf-Report/8092/",
  mav: "https://magicseaweed.com/Mavericks-Half-Moon-Bay-Surf-Report/162/",
  lmar: "https://magicseaweed.com/Linda-Mar-Pacifica-Surf-Report/819/",
  stin: "https://magicseaweed.com/Stinson-Beach-Surf-Report/4216/",
  mar: "https://magicseaweed.com/Marin-County-Surf-Report/307/",
  bol: "https://magicseaweed.com/Bolinas-Surf-Report/4221/",
};

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.get("/update", async (req, res) => {
  const updatedReports = await updateReports(URLS);
  res.send({ updatedReports });
});

app.get("/ob", async (req, res) => {
  const updatedReport = await updateReports(URLS.ob);
  res.send({ updatedReport });
});
app.get("/pac", async (req, res) => {
  const updatedReport = await updateReports(URLS.pac);
  res.send({ updatedReport });
});
app.get("/mav", async (req, res) => {
  const updatedReport = await updateReports(URLS.mav);
  res.send({ updatedReport });
});
app.get("/lmar", async (req, res) => {
  const updatedReport = await updateReports(URLS.lmar);
  res.send({ updatedReport });
});
app.get("/stin", async (req, res) => {
  const updatedReport = await updateReports(URLS.stin);
  res.send({ updatedReport });
});
app.get("/mar", async (req, res) => {
  const updatedReport = await updateReports(URLS.mar);
  res.send({ updatedReport });
});
app.get("/bol", async (req, res) => {
  const updatedReport = await updateReports(URLS.bol);
  res.send({ updatedReport });
});

app.listen(process.env.PORT || 8081);

// async function scrapeAndSave() {
//     const URLS = {
//       ob: "https://magicseaweed.com/Ocean-Beach-Surf-Report/255/",
//       pac: "https://magicseaweed.com/Pacifica-Pier-Surf-Report/8092/",
//       mav: "https://magicseaweed.com/Mavericks-Half-Moon-Bay-Surf-Report/162/",
//       lmar: "https://magicseaweed.com/Linda-Mar-Pacifica-Surf-Report/819/",
//       stin: "https://magicseaweed.com/Stinson-Beach-Surf-Report/4216/",
//       mar: "https://magicseaweed.com/Marin-County-Surf-Report/307/",
//       bol: "https://magicseaweed.com/Bolinas-Surf-Report/4221/",
//     };
//     for (const url in URLS) {
//       const data = await magicScrape(URLS[url]);
//       const report = new Report(data);
//       await report.save();
//     }
//   }
