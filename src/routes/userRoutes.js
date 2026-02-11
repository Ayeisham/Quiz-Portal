const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

const { authMiddleware } = require("../middlewares/authMiddleware");
const { isAdmin } = require("../middlewares/roleMiddleware");

router.post("/login", userController.loginUser);
router.post("/register", userController.registerUser);

router.get("/list", authMiddleware, isAdmin, userController.listUsers);
router.put("/:id", authMiddleware, isAdmin, userController.updateUser);
router.delete("/:id", authMiddleware, isAdmin, userController.deleteUser);

module.exports = router;
