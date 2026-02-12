const User = require("./userModel");
const Paper = require("./paper");
const Question = require("./question");
const Option = require("./option");

// Associations

// Paper ↔ User
Paper.belongsTo(User, { foreignKey: "createdBy", as: "admin" });

// Paper ↔ Question
Paper.hasMany(Question, { foreignKey: "paperId", as: "questions" });
Question.belongsTo(Paper, { foreignKey: "paperId", as: "paper" });

// Question ↔ Option
Question.hasMany(Option, { foreignKey: "questionId", as: "options" });
Option.belongsTo(Question, { foreignKey: "questionId", as: "question" });

module.exports = {
  User,
  Paper,
  Question,
  Option,
};
