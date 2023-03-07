const GroupModel = require("../Models/Group");

exports.findGroupByUser = async (userid) => {
  return await GroupModel.find({ username: userid });
};

exports.findGroupById = async (id) => {
  return await GroupModel.findById(id);
};

exports.findGroup = async (groupName) => {
  return await GroupModel.findOne({ groupName: groupName });
};

exports.createGroup = async (group) => {
  return await GroupModel.create(group);
};

exports.updateGroup = async (id, group) => {
  return await GroupModel.findByIdAndUpdate(id, group, { new: true });
};
