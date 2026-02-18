const express = require("express");
const router = express.Router();

const authenticate = require("../middlewares/authMiddleware");
const authorize = require("../middlewares/roleMiddleware");
const { fullPaperSchema } = require("../validations/paperValidation");
const validate = require("../middlewares/validateMiddleware");

const PaperController = require("../controllers/paperController");
const ExamController = require("../controllers/examSessionController");

router.post(
  "/createPaper",
  authenticate,
  authorize(["admin"]),
  validate(fullPaperSchema),
  PaperController.createPaper,
);
router.get(
  "/paperlist",
  authenticate,
  authorize(["admin", "examiner"]),
  PaperController.getAllPapers,
);

router.post(
  "/ExamSession",
  authenticate,
  authorize(["examiner"]),
  ExamController.createExamSession,
);

module.exports = router;
