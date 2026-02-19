const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const sequelize = require("../config/database");
const userRoutes = require("../src/routes/userRoutes");
const paperRoutes = require("../src/routes/paperRoutes");
const questionRoutes = require("../src/routes/questionRoutes");

app.get("/", (req, res) => res.send("Server is running"));
app.use("/api/users", userRoutes);
app.use("/api/paper", paperRoutes);
app.use("/api/question", questionRoutes);

(async () => {
  try {
    await sequelize.sync();
    console.log("DB synced");
    app.listen(3000, () => console.log("Server is running on port 3000"));
  } catch (error) {
    console.log("DB error", error);
  }
})();
