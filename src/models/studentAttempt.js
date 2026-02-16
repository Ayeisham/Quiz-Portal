const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const studentAttempt = sequelize.define("studentAttempt", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  status: {
    type: DataTypes.ENUM("IN_PROGRESS", "COMPLETED"),
    defaultValue: "IN_PROGRESS",
  },
  score: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  startedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  completedAt: {
    type: DataTypes.DATE,
  },
});

module.exports = studentAttempt;
