const express = require("express");
const router = express.Router();

const QuestionController = require("../controllers/questionController");
const authenticate = require("../middlewares/authMiddleware");
const authorize = require("../middlewares/roleMiddleware");

router.post(
  "/createQuestion",
  authenticate,
  authorize(["admin"]),
  QuestionController.createQuestion,
);
router.post(
  "/createOption",
  authenticate,
  authorize(["admin"]),
  QuestionController.createOption,
);

module.exports = router;
