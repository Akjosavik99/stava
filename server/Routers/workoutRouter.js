const express = require("express");

const {
  createWorkout,
  findWorkout,
  findWorkoutById,
} = require("../Controllers/workoutController");

const {
  getWorkoutPlansByOwner,
  createWorkoutPlan,
  findWorkoutPlanById,
} = require("../Controllers/workoutplanController");

const router = express.Router();

router.route("/").post(createWorkout).get(findWorkout);
router.route("/:id").get(findWorkoutById);
router.route("/plan").get(getWorkoutPlansByOwner).post(createWorkoutPlan);
router.route("/plan/:id").get(findWorkoutPlanById);

module.exports = router;
