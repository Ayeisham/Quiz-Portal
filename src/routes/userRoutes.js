const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

const authenticate = require("../middlewares/authMiddleware");
const authorize = require("../middlewares/roleMiddleware");

router.post("/login", userController.loginUser);
router.post("/register", userController.registerUser);

router.get("/list", authorize(["admin"]), userController.listUsers);
router.put("/:id", authorize(["admin"]), userController.updateUser);
router.delete("/:id", authorize(["admin"]), userController.deleteUser);

module.exports = router;
