const workout = require("../Models/workout");
const user = require("../Models/user");
const workoutService = require("../Services/workoutService");

exports.findWorkout = async (req, res) => {
  try {
    const owner = req.session.user.username;
    const workouts = await workoutService.getWorkoutByOwner(owner);
    res.json({ data: workouts, status: "success" });
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
