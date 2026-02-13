const Joi = require("joi");

const optionSchema = Joi.object({
  optionText: Joi.string().required(),
  isCorrect: Joi.boolean().required(),
});

const questionSchema = Joi.object({
  questionText: Joi.string().required(),
  type: Joi.string().valid("single", "multiple").required(),
  options: Joi.array().items(optionSchema).min(2).required(),
});

const fullPaperSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  securityKey: Joi.string().required(),
  isEnabled: Joi.boolean().required(),
 
});

module.exports = {
  fullPaperSchema,
  questionSchema,
  optionSchema,
};
