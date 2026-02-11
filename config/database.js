const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
    
    process.env.DB_NAME,
    process.env.DB_USER, 
    process.env.DB_PASSWORD,
 {
  host: process.env.DB_HOST,
  logging: false,
  dialect: "mysql", // or postgres
});

sequelize
  .authenticate()
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("DB error:", err));

module.exports = sequelize;
