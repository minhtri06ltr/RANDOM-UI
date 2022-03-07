const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());
// recognize the incoming Request Object as strings or arrays
app.use(express.urlencoded());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
