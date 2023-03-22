const express = require("express");

const {
  findGroupByUser,
  findGroupById,
  createGroup,
  updateGroup,
  getAllGroups,
  joinGroup,
  findPostsByGroup,
} = require("../Controllers/groupController.js");

const router = express.Router();

router.route("/").get(findGroupByUser).post(createGroup);
router.route("/all").get(getAllGroups);
router.route("/find/:id").get(findGroupById);
router.route("/update/:id").post(updateGroup);
router.route("/join/:id").post(joinGroup);
router.route("/posts/:id").get(findPostsByGroup);

module.exports = router;
