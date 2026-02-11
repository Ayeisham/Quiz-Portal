const userService = require("../services/userService");

const registerUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(401).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const listUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.json({ success: true, data: users });
};

const updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.json({ success: true, data: user });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await userService.deleteUser(req.params.id);
    res.json({ success: true, message: "User disabled", data: user });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await userService.loginUser(email, password);
    res.json({ success: true, data: result });
  } catch (err) {
    res.status(401).json({ success: false, message: err.message });
  }
};

module.exports = { registerUser, listUsers, updateUser, deleteUser, loginUser };
