import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  Frame,
  Column,
  Title,
  Title2,
  Frame2,
  SaveButton,
  InputField,
} from "../components/MyWorkout";
import SetsXReps from "../components/SetsXReps";
import MyExercises from "../components/MyExercises";
import axios from "axios";

axios.defaults.withCredentials = true;

type Exercise = {
  exerciseName: string;
  sets: number;
  reps: number;
};

type WorkoutData = {
  workoutname: string;
  exercises: Array<Exercise>;
};

type ChosenExercise = {
  name: string;
  src: any;
  sets: number;
  reps: number;
};

const saveWorkout = async (currentData: WorkoutData) => {
  console.log(currentData);
  await axios
    .post("http://localhost:3001/api/workout", currentData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("done");
    });
};

const CreateWorkout: React.FC = (props) => {
  const [data, setData] = useState<WorkoutData>({
    workoutname: "undefined",
    exercises: [],
  });
  const [exercises, setExercises] = useState<Array<ChosenExercise>>([]);
  const [title, setTitle] = useState<string>("undefined");

  const updateExercises = (name: string, src: any): void => {
    setExercises([...exercises, { name: name, src: src, sets: 0, reps: 0 }]);
  };

  const updateSets = (sets: number, index: number): void => {
    exercises[index].sets = sets;
    setExercises([...exercises]);
  };
  const updateReps = (reps: number, index: number): void => {
    exercises[index].reps = reps;
    setExercises([...exercises]);
  };

  let chosenExercises = exercises.map((exercise) => {
    return (
      <SetsXReps
        source={exercise.src}
        index={exercises.indexOf(exercise)}
        updateSets={updateSets}
        updateReps={updateReps}
      />
    );
  });

  useEffect(() => {
    setData({
      workoutname: title,
      exercises: exercises.map((exercise) => {
        return {
          exerciseName: exercise.name,
          sets: exercise.sets,
          reps: exercise.reps,
        };
      }),
    });
  }, [exercises, title]);

  return (
    <>
      <Navbar />
      <MyExercises updateExercises={updateExercises} />
      <Frame>
        <Column>
          <Title2>Workout name: </Title2>
          <InputField onChange={(e) => setTitle(e.target.value)} />
        </Column>
        <Column>
          <Frame2>
            <Title2>Exercices</Title2>
            <ul>{chosenExercises}</ul>
          </Frame2>
        </Column>
        <SaveButton
          onClick={() => {
            saveWorkout(data);
          }}
        >
          Save Workout
        </SaveButton>
      </Frame>
    </>
  );
};

export default CreateWorkout;
