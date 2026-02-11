const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const sequelize = require("../config/database");
const userRoutes = require("../src/routes/userRoutes");


app.get("/", (req, res) => res.send("Server is running"));
app.use("/api/users" , userRoutes);

(async () => {
  try {
    await sequelize.sync();
    console.log("DB synced");
    app.listen(3000, () => console.log("Server is running on port 3000"));
  } catch (error) {
    console.log("DB error", error);
  }
})();

