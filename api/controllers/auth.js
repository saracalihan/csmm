const jwt = require("jsonwebtoken");
const mock = require("../mocks/users.json");

const login = (req, res) => {
  const { username, password } = req.body;
  const user = mock.users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    const token = jwt.sign({ username }, "buraks");
    res.json({
      token,
    });
  } else {
    res.status(400).send({ message: "kullanıcı adı veya şifre hatalı" });
  }
};

const register = (req, res) => {};
const forgot = (req, res) => {};

module.exports = { login, register, forgot };
