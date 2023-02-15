const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  owner: { type: String, required: true },
  workoutname: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now },
  exercises: [{ exerciseName: String, sets: Number, reps: Number }],
});

module.exports = mongoose.model("workout", workoutSchema);
