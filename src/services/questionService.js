const Question = require("../models/question");
const Option = require("../models/option");

const createQuestion = async (data) => {
  const question = await Question.create(data);
  return question;
};

const createOption = async (optionsArray) => {
  if (!Array.isArray(optionsArray)) {
    throw new Error("Options must be an array");
  }

  const createdOptions = await Option.bulkCreate(optionsArray, {
    returning: true,
  });

  return createdOptions;
};

module.exports = { createQuestion, createOption };
