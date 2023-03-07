const express = require("express");

const {
  findGroupByUser,
  findGroupById,
  createGroup,
  updateGroup,
} = require("../Controllers/groupController.js");

const router = express.Router();

router.route("/").get(findGroupByUser).post(createGroup);
router.route("/find/:id").get(findGroupById);
router.route("/update/:id").put(updateGroup);

module.exports = router;
