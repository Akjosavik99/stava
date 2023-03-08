const express = require("express");

const {
  createUser,
  loginUser,
  authCheck,
  logoutUser,
  deleteUser,
  UserFeed,
} = require("../Controllers/userController");

const router = express.Router();

router.route("/auth").post(loginUser).get(authCheck).delete(logoutUser);
router.route("/register").post(createUser).delete(deleteUser);
router.route("/feed").get(UserFeed);

module.exports = router;
