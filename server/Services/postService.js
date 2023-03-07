const PostModel = require("../Models/Post");

exports.findPostByUser = async (username) => {
  return await PostModel.find({ author: username });
};

exports.findPostById = async (id) => {
  return await PostModel.findById(id);
};

exports.createPost = async (post) => {
  return await PostModel.create(post);
};

exports.updatePost = async (id, post) => {
  return await PostModel.findByIdAndUpdate(id, post, { new: true });
};

exports.deletePost = async (id) => {
  return await PostModel.findByIdAndDelete(id);
};
