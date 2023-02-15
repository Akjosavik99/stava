const workoutModel = require("../Models/workout");

module.exports.createWorkout = async (workout) => {
  return await workoutModel.create(workout);
};

module.exports.getWorkout = async (name) => {
  return await workoutModel.findOne({ name: name });
};

module.exports.getWorkoutByOwner = async (owner) => {
  return await workoutModel.find({ owner: owner });
};

module.exports.getWorkoutById = async (id) => {
  return await workoutModel.findById(id);
};
