const express = require("express");

const {
  findGroupByUser,
  findGroupById,
  createGroup,
} = require("../Controllers/groupController.js");

const router = express.Router();

router.route("/").get(findGroupByUser).post(createGroup);
router.route("find/:id").get(findGroupById);

module.exports = router;
