const QuestionService = require("../services/questionService");

const createQuestion = async (req, res) => {
  try {
    const Question = await QuestionService.createQuestion(req.body);
    res.status(201).json({ success: true, data: Question });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const createOption = async (req, res) => {
  try {
    const Option = await QuestionService.createOption(req.body);
    
    res.status(201).json({ success: true, data: Option });
  } catch (error) {
    res.status(400).json({ succes: false, message: error.message });
  }
};

module.exports = {
  createOption,
  createQuestion,
};
