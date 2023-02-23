const mongoose = require("mongoose");
const user = require("./user");
const workout = require("./workout");

const Schema = mongoose.Schema;

const workoutPlanSchema = new Schema({
  owner: { type: String, required: true },
  workoutPlanName: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now },
  workouts: [{ workoutID: String, workoutName: String, day: [String] }],
  followers: [String],
});

module.exports = mongoose.model("WorkoutPlan", workoutPlanSchema);
