const Paper = require("../models/paper");

const createPaper = async (data) => {
  const paper = await Paper.create(data);
  return paper;
};

const getAllPapers = async () => {
  return await Paper.findAll({
    include: [
      {
        association: "questions",
      },
    ],
  });
};

const getPaperById = async () => {
  return await Paper.findByPk(id, {
    include: [
      {
        association: "questions",
      },
    ],
  });
};

module.exports = { createPaper, getAllPapers, getPaperById };
