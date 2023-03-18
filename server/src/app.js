/* eslint-disable */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
reportController = require("./controllers/reports");
const cron = require("node-cron");
const scrapeAndSave = require("./controllers/scrapeReports");

mongoose.set("strictQuery", true);
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PSWD}@cluster0.ot47vli.mongodb.net?retryWrites=true&writeConcern=majority
  `,
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    const app = express();
    app.use(morgan("combined"));
    app.use(bodyParser.json());
    app.use(cors());

    app.get("/reports", reportController.findReports);
    app.get("/report/:id", reportController.findReport);

    app.listen(process.env.PORT || 8081, () => {
      console.log(`Server listening on port ${process.env.PORT || 8081}`);
    });
  })
  .catch((e) => {
    console.log("Database connection failed ", e);
  });

async function scheduleScraper() {
  console.log("------SCRAPING-IN-PROGRESS------");
  await scrapeAndSave();
  cron.schedule("59 * * * *", async function () {
    console.log("------SCRAPING-IN-PROGRESS------");
    await scrapeAndSave();
  });
}
scheduleScraper();
