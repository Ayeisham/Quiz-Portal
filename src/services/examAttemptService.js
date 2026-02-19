const ExamSession = require("../models/examSession");
const StudentAttempt = require("../models/studentAttempt");

const startExam = async (studentId, joiningKey) => {
  const session = await ExamSession.findOne({
    where: {
      joiningKey,
      isActive: true,
    },
    include: [
      {
        association: "papersession",
        include: [
          {
            association: "questions",
            include: [
              {
                association: "options",
                attributes: ["id", "optionText"],
              },
            ],
          },
        ],
      },
    ],
  });

  if (!session) {
    throw new Error("Invalid or expiry joining key");
  }

  if (!session.papersession.isEnabled) {
    throw new Error("Paper is disabled");
  }

  const attempt = await StudentAttempt.create({
    studentId,
    examSessionId: session.id,
  });

  return {
    attemptId: attempt.id,
    paper: session.papersession,
  };
};

module.exports = { startExam };
