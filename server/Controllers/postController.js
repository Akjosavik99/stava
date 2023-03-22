const post = require("../Models/Post");
const postService = require("../Services/postService");
const groupService = require("../Services/groupService");
const workoutPlanService = require("../Services/workoutplanService");

exports.findPostByUser = async (req, res) => {
  try {
    const username = req.session.user.username;
    const posts = await (await postService.findPostByUser(username)).reverse();
    res.json({ data: posts, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.findPostById = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await postService.findPostById(id);
    res.json({ data: post, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createPost = async (req, res) => {
  try {
    const { title, text, workoutPlanName, workoutPlanID, picture } = req.body;
    const { user } = req.session;
    if (!title || !text || !workoutPlanName || !workoutPlanID || !user) {
      return res.status(400).json({ message: "Incomplete post request!" });
    } else {
      const newPost = await postService.createPost(
        new post({
          author: user.username,
          title: title,
          text: text,
          workoutPlan: {
            workoutPlanName: workoutPlanName,
            workoutPlanID: workoutPlanID,
          },
          picture: picture,
        })
      );
      res.status(200).json({ data: newPost, message: "New post created" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createPost2 = async (req, res) => {
  try {
    const { title, text, workoutPlanID, groupID, picture } = req.body;
    const { user } = req.session;
    if (!title || !text || !groupID || !user) {
      return res.status(400).json({ message: "Incomplete post request!" });
    } else {
      const workoutPlanName = await workoutPlanService.getWorkoutPlanById(
        workoutPlanID
      ).workoutPlanName;
      const newPost = await postService.createPost(
        new post({
          author: user.username,
          title: title,
          text: text,
          workoutPlan: {
            workoutPlanName: workoutPlanName,
            workoutPlanID: workoutPlanID,
          },
          picture: picture,
        })
      );
      await groupService.addPostToGroup(groupID, newPost._id);
      res.status(200).json({ data: newPost, message: "New post created" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = req.body;
    if (!post || !id) {
      res.status(500).json({ error: err });
    } else {
      const updatedPost = await postService.updatePost(id, post);
      res.status(200).json({ data: updatedPost, message: "post updated" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedPost = await postService.deletePost(id);
    res.status(200).json({ data: deletedPost, message: "post deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
