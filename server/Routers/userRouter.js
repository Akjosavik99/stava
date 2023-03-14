const express = require("express");

const {
  createUser,
  loginUser,
  authCheck,
  logoutUser,
  deleteUser,
  UserFeed,
  log,
} = require("../Controllers/userController");

const router = express.Router();

router.route("/auth").post(loginUser).get(authCheck).delete(logoutUser);
router.route("/register").post(createUser).delete(deleteUser);
router.route("/feed").get(UserFeed);
router.route("/log").post(log);

module.exports = router;
