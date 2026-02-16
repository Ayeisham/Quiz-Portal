const StudentAttempt = require("../services/examAttemptService");

const startExam = async (req, res) => {
  try {

    const studentId = req.user.id;
    const { joiningKey } = req.body;
    const Paper = await StudentAttempt.startExam(studentId, joiningKey);
    res.status(201).json({ success: true, data: Paper });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { startExam };

