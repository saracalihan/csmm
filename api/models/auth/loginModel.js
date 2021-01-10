const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LoginSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const LoginSC = mongoose.model("users", LoginSchema);
module.exports = { LoginSC };
