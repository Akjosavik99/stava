const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,
  },
  password: { type: String, required: true, minlength: 8 },
  date: { type: Date, default: Date.now },
  groups: [String],
  plans: [String],
  exercises: [String],
  log: [{ date: { type: Date, default: Date.now() }, text: String }],
});

UserSchema.static({
  async getUserByUsername(username) {
    const user = await this.findOne({ username: username });
    return user;
  },
});

module.exports = mongoose.model("User", UserSchema);
