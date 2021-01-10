require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoute = require("./routes/Auth/authRoute");
const mongoose = require("mongoose");

const server = express();
server.use(bodyParser.json({ limit: "30mb", extended: 30 }));
server.use(bodyParser.urlencoded({ limit: "30mb", extended: 30 }));
server.use(cors());

server.get("/", (req, res) => {
  res.json({
    login: "/login",
  });
});

server.use("/auth", authRoute);
const PORT = process.env.PORT || 2000;

console.log("uri -> ", process.env.MONGO_URL);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    server.listen(PORT, () => {
      console.log("server is running on port 5000");
    });
  })
  .catch((err) => {
    console.log("api failed ->", err);
  });
