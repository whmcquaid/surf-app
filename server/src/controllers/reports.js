const Report = require("../models/reports");

exports.findReports = async (req, res) => {
  const reports = await Report.find();
  res.send(reports);
};

exports.createReport = async (req, res) => {
  const report = new Report(req.body);
  await report.save();
  res.send({ data: report });
};

exports.findReport = async (req, res) => {
  try {
    console.log(req.params);
    const report = await Report.find({ break: req.params });
    res.send({ data: report });
  } catch (e) {
    res.status(404).send({ error: "report not found", log: e });
  }
};

exports.updateReport = async (req, res) => {
  try {
    const report = await Report.find(req.params.break);
    Object.assign(report, req.body);
    report.save();
    res.send({ data: report });
  } catch (e) {
    res.status(404).send({ error: "report not found", log: e });
  }
};

exports.deleteReport = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    await report.remove();
    res.send({ data: true });
  } catch (e) {
    res.status(404).send({ error: "report not found", log: e });
  }
};
