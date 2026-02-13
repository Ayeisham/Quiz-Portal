const PaperService = require("../services/paperService");

const createPaper = async (req, res) => {
  try {
    const paperData = {
      ...req.body,
      createdBy: req.user.id,
    };

    const paper = await PaperService.createPaper(paperData);

    res.status(201).json({ success: true, data: paper });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getAllPapers = async (req, res) => {
  try {
    const papers = await PaperService.getAllPapers();
    res.status(201).json({ success: true, data: papers });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { createPaper, getAllPapers };
