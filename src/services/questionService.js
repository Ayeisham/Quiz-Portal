const Question = require("../models/question");
const Option = require("../models/option");

const createQuestion = async (data) => {
  const question = await Question.create(data);
  return question;
};

const createOption = async (data) => {
  const option = await Option.create(data);
  return option;
};

module.exports = { createQuestion, createOption };
