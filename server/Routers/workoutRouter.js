const express = require("express");

const {
  createWorkout,
  findWorkout,
} = require("../Controllers/workoutController");

const router = express.Router();

router.route("/").post(createWorkout).get(findWorkout);
//TODO
//router.route("/plan").get(findWorkout);

module.exports = router;
