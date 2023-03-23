const express = require("express");

const {
  createUser,
  loginUser,
  authCheck,
  getAllUsers,
  logoutUser,
  deleteUser,
  UserFeed,
  log,
  getUserName,
  adminCheck,
} = require("../Controllers/userController");

const router = express.Router();

router.route("/auth").post(loginUser).get(authCheck).delete(logoutUser);
router.route("/all").get(getAllUsers);
router.route("/register").post(createUser).delete(deleteUser);
router.route("/feed").get(UserFeed);
router.route("/log").post(log);
router.route("/username").get(getUserName);
router.route("/admin").get(adminCheck);

module.exports = router;
