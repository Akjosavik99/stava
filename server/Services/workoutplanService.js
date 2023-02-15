const workoutPlanModel = require("../Models/workoutPlan");

module.exports.createWorkoutPlan = async (workoutPlan) => {
  return await workoutPlanModel.create(workoutPlan);
};

module.exports.getWorkoutPlansByOwner = async (owner) => {
  return await workoutPlanModel.find({ owner: owner });
};
