import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ExerciseComponent from "../components/ExerciseComponent";
import {
  DataContainer,
  ExerciseContainer,
  ExerciseImage,
  InnerExercisesContainer,
  OuterExercisesContainer,
  RepsSets,
  RepsSetsContainer,
} from "../components/Form";
import bench from "../assets/workout_icons/bench.svg";
import cycle from "../assets/workout_icons/cycle.svg";
import dumbell from "../assets/dumbell.svg";
import machine from "../assets/maskin.svg";
import medicineBall from "../assets/medisinball.svg";
import running from "../assets/running.svg";
import yoga from "../assets/yoga.svg";
import stretching from "../assets/stretching.svg";
import pulldown from "../assets/pulldown.svg";
import situps from "../assets/situps.svg";
import hangups from "../assets/hangups.svg";
import jumping from "../assets/jumping.svg";

import axios from "axios";
import { Exercise, Exercises } from "../util/types";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";

const useGetDataQuery = (id: string | undefined) => {
  return useQuery<Exercises>(["workout", id], async () => {
    return await axios
      .get(`http://localhost:3001/api/workout/${id}`)
      .then((res) => {
        console.log(res.data.data);
        return res.data.data;
      });
  });
};

const ViewExercises: React.FC = () => {
  const [exercises, setExercises] = React.useState<Exercises>({} as Exercises);
  const params = useParams();

  const { data, isLoading } = useGetDataQuery(params.id);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <DataContainer>
        <OuterExercisesContainer>
          <h1 style={{ textAlign: "center" }}>Exercises</h1>

          <InnerExercisesContainer>
            {data?.exercises.map(
              (exercise: {
                exerciseName: string;
                reps: number;
                sets: number;
              }) => {
                return (
                  <ExerciseComponent
                    img={exercise.exerciseName}
                    reps={exercise.reps}
                    sets={exercise.sets}
                  />
                );
              }
            )}
          </InnerExercisesContainer>
        </OuterExercisesContainer>
      </DataContainer>
    </>
  );
};
export default ViewExercises;
