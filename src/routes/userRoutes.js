const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const AttemptController = require("../controllers/attemptController");

const authenticate = require("../middlewares/authMiddleware");
const authorize = require("../middlewares/roleMiddleware");

router.post("/login", userController.loginUser);
router.post("/register", userController.registerUser);

router.get(
  "/list",
  authenticate,
  authorize(["admin"]),
  userController.listUsers,
);
router.put(
  "/:id",
  authenticate,
  authorize(["admin"]),
  userController.updateUser,
);
router.delete(
  "/:id",
  authenticate,
  authorize(["admin"]),
  userController.deleteUser,
);

router.post(
  "/startExam",
  authenticate,
  authorize(["student"]),
  AttemptController.startExam,
);

module.exports = router;
