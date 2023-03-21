const user = require("../Models/user");
const userModel = require("../Models/user");

exports.createUser = async (user) => {
  return await userModel.create(user);
};

exports.getAllUsers = async () => {
  return await userModel.find();
};

exports.getUserByName = async (username) => {
  return await userModel.findOne({ username: username });
};

exports.updateUser = async (id, user) => {
  return await userModel.findByIdAndUpdate(id, user);
};

exports.deleteUser = async (id) => {
  return await userModel.findByIdAndDelete(id);
};
