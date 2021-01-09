const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const server = express();

server.use(bodyParser.json({ limit: "30mb", extended: 30 }));
server.use(bodyParser.urlencoded({ limit: "30mb", extended: 30 }));

server.use(cors());

server.get("/", (req, res) => {
  res.json({
    name: "sa",
    surname: "as",
  });
});

const PORT = 5000;

const url =
  "mongodb+srv://buraksmn:Bur4kS4m4n@cluster0.mv7ox.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose
  .connect(url, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })
  .then(() => {
    server.listen(PORT, () => {
      console.log("server is running on port 5000");
    });
  })
  .catch((err) => {});
