const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  groupName: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
  },
  isPrivate: { type: Boolean, required: true },
  date: { type: Date, default: Date.now },
  owners: [{ userName: String, userID: String }],
  members: [{ userName: String, userID: String }],
  postIDs: [String],
});

module.exports = mongoose.model("Group", GroupSchema);
