const workout = require("../Models/Workout");
const workoutService = require("../Services/workoutService");

exports.findWorkoutById = async (req, res) => {
  try {
    const id = req.params.id;
    const workout = await workoutService.getWorkoutById(id);
    res.json({ data: workout, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createWorkout = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  try {
    const owner = req.session.user.username;
    const { workoutname, exercises } = req.body;
    if (!owner || !exercises || !workoutname) {
      return res.status(400).json({ message: "Incomplete post request!" });
    } else if (await workoutService.getWorkout(workoutname)) {
      return res.status(400).json({ message: "workoutname is taken." });
    } else {
      const newWorkout = await workoutService.createWorkout(
        new workout({
          owner: owner,
          workoutname: workoutname,
          exercises: exercises,
        })
      );
      res
        .status(200)
        .json({ data: newWorkout, message: "New workout created" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getWorkoutByOwner = async (req, res) => {
  try {
    if (!req.session.user) {
      res.status(401).json({ status: "Fail", message: "Unauthorized" });
      return;
    }
    const owner = req.session.user.username;
    const workouts = await workoutService.getWorkoutsByOwner(owner);
    res.json({
      data: workouts,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getWorkoutById = async (req, res) => {
  try {
    const id = req.params.id;
    const workout = await workoutService.getWorkoutById(id);
    res.json({ data: workout, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
