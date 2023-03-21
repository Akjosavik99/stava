const express = require("express");

const {
  findPostByUser,
  findPostById,
  createPost,
  createPost2,
  updatePost,
} = require("../Controllers/postController.js");

const router = express.Router();

router.route("/").get(findPostByUser).post(createPost);
router.route("/submit").post(createPost2);
router.route("/find/:id").get(findPostById);
router.route("/update/:id").put(updatePost);

module.exports = router;
