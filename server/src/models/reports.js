const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  break: String,
  waveHeight: String,
  wind: String,
  tide_1: String,
  tide_2: String,
  date: Date,
  url: String,
});

module.exports = mongoose.model("Report", schema);
