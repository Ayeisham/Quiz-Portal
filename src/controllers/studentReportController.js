const StudentReportService = require("../services/studentReportService");

const submitExam = async (req, res) => {
  try {
    const attemptId = req.body.attemptId;
    const answers = req.body.answers;

    if (!attemptId) {
      res
        .status(401)
        .json({ success: false, message: "Attempt Id is required" });
    }
    if (!answers) {
      res
        .status(401)
        .json({ success: false, message: "Answers are required." });
    }
    const result = await StudentReportService.submitExam(attemptId, answers);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = { submitExam };
