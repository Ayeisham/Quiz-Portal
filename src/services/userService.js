const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async ({ name, email, password, role }) => {
  const existing = await User.findOne({ where: { email } });
  if (existing) throw new Error("Email Id already exists");

  const user = User.create({ name, email, password, role });
  return user;
};

const getAllUsers = async () => {
  return await User.findAll();
};

const updateUser = async (id, data) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error("User is invalid");
  await user.update(data);
  return user;
};

const deleteUser = async (id) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error("üser not found");
  await user.update({ isActive: false });
  return user;
};

const loginUser = async (email, password) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (!user) throw new Error("Invalid Credentials");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error("password is invalid");

  const token = jwt.sign(
    {
      id: user.id,
      role: user.role,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "1d" },
  );
  return { user, token };
};

module.exports = { createUser, getAllUsers, updateUser, deleteUser, loginUser };
