const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const ExamSession = sequelize.define(
  "ExamSession",
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
    examinerId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    joiningKey: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = ExamSession;
