const jwt = require("jsonwebtoken");
const { LoginSC } = require("../models/auth/loginModel");

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await LoginSC.findOne({ username, password }).exec();
    if (user) {
      const token = jwt.sign({ username }, "buraks");
      res.json({
        token,
      });
    } else {
      res.status(400).send({ message: "kullanıcı adı veya şifre hatalı" });
    }
  } catch (err) {
    res.send(err).status(400);
  }
};
const register = (req, res) => {
  const { username, password } = req.body;
  LoginSC.create({
    username,
    password,
  })
    .then((result) => {
      res.json({ result, isSuccess: true }).status(200);
    })
    .catch((err) => {
      console.log("ERR => ", err);
      res.json({ err, isSuccess: false }).status(400);
    });
};
const forgot = (req, res) => {};
module.exports = { login, register, forgot };
