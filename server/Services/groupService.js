const GroupModel = require("../Models/Group");

exports.findGroupByUser = async (userid) => {
  return await GroupModel.find({ username: userid });
};

exports.findGroupById = async (id) => {
  return await GroupModel.findById(id);
};
