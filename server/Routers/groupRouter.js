const express = require("express");

const {
  findGroupByUser,
  findGroupById,
  createGroup,
  updateGroup,
  findPostsByGroup,
  getAllGroups,
  joinGroup
} = require("../Controllers/groupController.js");

const router = express.Router();

router.route("/").get(findGroupByUser).post(createGroup);
router.route("/all").get(getAllGroups);
router.route("/find/:id").get(findGroupById);
router.route("/update/:id").put(updateGroup);
router.route("/posts/:id").get(findPostsByGroup);
router.route("/join/:id").post(joinGroup);

module.exports = router;
