const express = require("express");
const router = express.Router();

const QuestionController = require("../controllers/questionController");

router.post("/createQuestion", QuestionController.createQuestion);
router.post("/createOption", QuestionController.createOption);

module.exports = router;
