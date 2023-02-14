const mongoose = require("mongoose");
const workout = require("./workout");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  owner: { type: String, required: true },
  workoutPlanName: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now },
  workouts: [workout],
  followers: [username],
});

module.exports = mongoose.model("Workout", Schema);
