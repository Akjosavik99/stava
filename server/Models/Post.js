const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  date: { type: Date, default: Date.now },
  author: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  workoutPlan: { workoutPlanName: String, workoutPlanID: String },
  picture: { type: String },
});

module.exports = mongoose.model("Post", PostSchema);
