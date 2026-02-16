const ExamSession = require("../models/examSession");
const Paper = require("../models/paper");

const createExamSession = async (req, res) => {
  try {
    const { paperId, startTime, endTime } = req.body;
    const paper = await Paper.findByPk(paperId);

    if (!paper) {
      res.status(400).json({ success: false, message: "Paper not found" });
    }

    const joiningKey = Math.random().toString(36).substring(2, 8).toUpperCase();
    const session = await ExamSession.create({
      paperId,
      examinerId: req.user.id,
      joiningKey,
      startTime,
      endTime,
      isActive: true,
    });
    res
      .status(201)
      .json({ success: true, data: session, message: "Exam session created" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { createExamSession };
