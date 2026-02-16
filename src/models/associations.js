const User = require("./userModel");
const Paper = require("./paper");
const Question = require("./question");
const Option = require("./option");
const ExamSession = require("./examSession");
const StudentAttempt = require("./studentAttempt");

// Associations

// Paper <=> User
Paper.belongsTo(User, { foreignKey: "createdBy", as: "admin" });

// Paper <=> Question
Paper.hasMany(Question, { foreignKey: "paperId", as: "questions" });
Question.belongsTo(Paper, { foreignKey: "paperId", as: "paper" });

// Question <=> Option
Question.hasMany(Option, { foreignKey: "questionId", as: "options" });
Option.belongsTo(Question, { foreignKey: "questionId", as: "question" });

//paper <=> examsession
Paper.hasMany(ExamSession, { foreignKey: "paperId", as: "session" });
ExamSession.belongsTo(Paper, { foreignKey: "paperId", as: "papersession" });

User.hasMany(ExamSession, { foreignKey: "examinerId", as: "userSession" });
ExamSession.belongsTo(User, { foreignKey: "examinerId", as: "Session" });

StudentAttempt.belongsTo(User, { foreignKey: "studentId", as: "student" });

ExamSession.hasMany(StudentAttempt, {
  foreignKey: "examSessionId",
  as: "attempts",
});
StudentAttempt.belongsTo(ExamSession, {
  foreignKey: "examSessionId",
  as: "examSession",
});

module.exports = {
  User,
  Paper,
  Question,
  Option,
  ExamSession,
  StudentAttempt,
};
