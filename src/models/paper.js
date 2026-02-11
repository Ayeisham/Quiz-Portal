const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const User = require("./userModel"); //reference for admin

const Paper = sequelize.define(
  "Paper",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    isEnabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    securityKey: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  },
);

//associations
Paper.belongsTo(User, { foreignKey: "createdBy", as: "admin" });
Paper.hasMany(require("./question"), {
  foreignKey: "paperId",
  as: "questions",
});

module.exports = Paper;
