const WorkoutModel = require("../Models/Workout");

module.exports.createWorkout = async (workout) => {
  return await WorkoutModel.create(workout);
};

module.exports.getWorkout = async (name) => {
  return await WorkoutModel.findOne({ name: name });
};

module.exports.getWorkoutsByOwner = async (owner) => {
  return await WorkoutModel.find({ owner: owner });
};

module.exports.getWorkoutById = async (id) => {
  return await WorkoutModel.findById(id);
};
