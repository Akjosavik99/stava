const bcrypt = require("bcrypt");
const user = require("../Models/User");
const userService = require("../Services/userService");
const postService = require("../Services/postService");
const groupService = require("../Services/groupService");

exports.getUserByName = async (req, res) => {
  try {
    const { username } = req.body;
    const user = await userService.getuserByName(username);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createUser = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  try {
    const { username, password, confirmPassword } = req.body;
    if (!username || !password || !confirmPassword) {
      return res.status(400).json({ message: "Fill out all fields!" });
    } else if (await userService.getUserByName(username)) {
      return res.status(400).json({ message: "Username is taken." });
    } else if (password !== confirmPassword) {
      return res.status(400).json({ message: "Your passwords do not match!" });
    } else {
      const hashedPwd = await bcrypt.hash(password, 5);
      const newUser = await userService.createUser(
        new user({ username: username, password: hashedPwd })
      );
      req.session.user = newUser;
      await groupService.createGroup({
        groupName: newUser.username + "" + newUser._id,
        isPrivate: true,
        owners: [{ userName: newUser.username, userID: newUser._id }],
        members: [{ userName: newUser.username, userID: newUser._id }],
        workoutPlans: [],
        postIDs: [],
      });
      res.status(200).json({ data: newUser, message: "New user created" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.loginUser = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  try {
    const user = await userService.getUserByName(req.body.username);
    const userPassword = req.body.password;
    if (user && userPassword) {
      const cmp = await bcrypt.compare(userPassword, user.password);
      if (cmp) {
        req.session.user = user;
        res.status(200).json({ user: user, msg: "Auth Successful" });
      } else {
        res.status(400).json({ msg: "Wrong username or password." });
      }
    } else {
      res.status(400).json({ msg: "Wrong username or password." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server error Occured");
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.status(200).json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.authCheck = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  try {
    const user = await userService.getUserByName(req.session.user.username);
    if (user) {
      req.session.user = user;
      return res.status(200).json({ data: user, message: "Autorisert :)" });
    }
  } catch (err) {
    return res.status(401).json({ message: "Ikke Autorisert :(" });
  }
};

exports.logoutUser = async (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      //destroy session
      if (err) throw err;
      res.clearCookie("session-id"); // clear cookie
    });
  }
  res.send("Logget ut.");
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await userService.deleteUser(req.query.id);
    if (user === null) {
      return res.status(400).json({ message: "User not found" });
    }
    res.status(200).json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.UserFeed = async (req, res) => {
  try {
    const user = await userService.getUserByName(req.session.user.username);
    const groups = await groupService.findGroupByUser(user.username);
    const postIDs = [];
    groups.forEach((group) => {
      postIDs.push(...group.postIDs);
    });
    const posts = await postService.getAllPosts(postIDs);
    res.status(200).json({ data: posts.reverse(), status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.log = async (req, res) => {
  try {
    const { text } = req.body;
    const user = await userService.getUserByName(req.session.user.username);
    if (text && user) {
      user.log.push({ date: Date.now(), text: text });
      const newUser = await userService.updateUser(user._id, user);
      res.status(200).json(newUser);
    } else {
      res.status(400).json({ message: "No text or user" });
    }
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    if (users) {
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserName = async (req, res) => {
  try {
    const user = await userService.getUserByName(req.session.user.username);
    console.log(user);
    if (user) {
      res.status(200).json({ message: user.username });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.adminCheck = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  try {
    const group = await groupService.findGroupById(req.query.groupID);
    const user = await userService.getUserByName(req.session.user.username);
    // Don't judge me for this
    let isAdmin = false;
    group.owners.forEach((owner) => {
      if (owner.userName === user.username) {
        isAdmin = true;
      }
    });
    if (isAdmin) {
      res.status(200).json({ message: "Admin" });
    } else {
      res.status(200).json({ message: "Not admin" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
