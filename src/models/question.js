const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const Paper = require("./paper");

const Question = sequelize.define(
  "Question",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    paperId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    questionText: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("single", "multi"),
      allowNull: false,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = Question;
