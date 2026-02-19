const { Paper } = require("../models/associations");

const createPaper = async (data) => {
  const paper = await Paper.create(data);
  return paper;
};

const getAllPapers = async () => {
  return await Paper.findAll({
    include: [
      {
        association: "questions",
        include: [
          {
            association: "options",
          },
        ],
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
