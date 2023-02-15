const express = require("express");

const {
  createWorkout,
  findWorkout,
} = require("../Controllers/workoutController");

const {
  getWorkoutPlansByOwner,
  createWorkoutPlan,
} = require("../Controllers/workoutplanController");

const router = express.Router();

router.route("/").post(createWorkout).get(findWorkout);
router.route("/plan").get(getWorkoutPlansByOwner).post(createWorkoutPlan);

module.exports = router;
