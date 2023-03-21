const WorkoutPlanModel = require("../Models/WorkoutPlan");

module.exports.createWorkoutPlan = async (workoutPlan) => {
  return await WorkoutPlanModel.create(workoutPlan);
};

module.exports.getWorkoutPlansByOwner = async (owner) => {
  return await WorkoutPlanModel.find({ owner: owner });
};

module.exports.getWorkoutPlanById = async (id) => {
  return await WorkoutPlanModel.findById(id);
};
