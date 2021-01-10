const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoute = require("./routes/Auth/authRoute");
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
const PORT = 5000;

server.listen(PORT, () => {
  console.log("server is running on port 5000");
});
