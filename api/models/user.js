const mongosee = require("mongoose");

const userSchema = mongosee.Schema({
  username: String,
  password: String,
});

const user = mongosee.model("user", userSchema);

export const user;
