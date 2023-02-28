const workoutPlan = require("../Models/workoutPlan");
const workoutplanService = require("../Services/workoutplanService");

exports.getWorkoutPlansByOwner = async (req, res) => {
  try {
    const owner = req.session.user.username;
    let workoutPlans = await workoutplanService.getWorkoutPlansByOwner(owner);
    res.json({
      data: workoutPlans,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createWorkoutPlan = async (req, res) => {
  try {
    const { workoutPlanName, workouts } = req.body;
    const owner = req.session.user.username;
    const newWorkoutPlan = await workoutplanService.createWorkoutPlan(
      new workoutPlan({
        owner: owner,
        workoutPlanName: workoutPlanName,
        workouts: workouts,
      })
    );
    res
      .status(200)
      .json({ data: newWorkoutPlan, message: "New workout plan created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.findWorkoutPlanById = async (req, res) => {
  try {
    const workoutPlanId = req.params.id;
    const workoutPlan = await workoutplanService.getWorkoutPlanById(
      workoutPlanId
    );
    res.status(200).json({ data: workoutPlan });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
