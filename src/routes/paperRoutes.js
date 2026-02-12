const express = require("express");
const router = express.Router();

const authenticate = require("../middlewares/authMiddleware");
const authorize = require("../middlewares/roleMiddleware");

const PaperController = require("../controllers/paperController");

router.post("/createPaper", authorize(["admin"]), PaperController.createPaper);
router.get("/paperlist", PaperController.getAllPapers);

module.exports = router;
