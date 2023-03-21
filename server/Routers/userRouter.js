const express = require("express");

const {
  createUser,
  loginUser,
  authCheck,
  logoutUser,
  deleteUser,
} = require("../Controllers/userController");

const router = express.Router();

router.route("/auth").post(loginUser).get(authCheck).delete(logoutUser);
router.route("/register").post(createUser).delete(deleteUser);

module.exports = router;
