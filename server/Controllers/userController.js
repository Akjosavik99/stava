const bcrypt = require("bcrypt");
const user = require("../Models/user");
const userService = require("../Services/userService");

exports.getUserByName = async (req, res) => {
  const { username } = req.body;
  try {
    const user = await userService.getuserByName(username);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "du må ha navn og passord" });
    } else if (await userService.getUserByName(username)) {
      return res.status(400).json({ message: "brukernavn allerede i bruk" });
    } else {
      const hashedPwd = await bcrypt.hash(password, 5);
      const newUser = await userService.createUser(
        new user({ username: username, password: hashedPwd })
      );
      req.session.user = newUser;
      res.status(200).json({ data: newUser, message: "New user created" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await userService.getUserByName(req.body.username);
    if (user) {
      const cmp = await bcrypt.compare(req.body.password, user.password);
      if (cmp) {
        req.session.user = user;
        res.json({ user: user, msg: "Auth Successful" });
      } else {
        res.json({ msg: "Wrong username or password." });
      }
    } else {
      res.json({ msg: "Wrong username or password." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server error Occured");
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.authCheck = async (req, res) => {
  const sessUser = req.session.user;
  if (sessUser) {
    return res.status(201).json({ data: user, message: "Autorisert :)" });
  } else {
    return res.status(401).json({ message: "Ikke Autorisert :(" });
  }
};

exports.logoutUser = async (req, res) => {
  req.session.destroy((err) => {
    //destroy session
    if (err) throw err;
    res.clearCookie("session-id"); // clear cookie
    res.send("Logget ut.");
  });
};
