import React from "react";

import axios from "axios";
import { Exercises } from "../types/workoutExerciseTypes";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import {
  InnerExercisesContainer,
  OuterExercisesContainer,
} from "../styles/ExerciseForm";
import { DataContainer } from "../styles/WorkoutForm";
import Navbar from "../components/Navbar";
import ExerciseComponent from "../components/ExerciseComponent";

const useGetDataQuery = (id: string | undefined) => {
  return useQuery<Exercises>(["exercises", id], async () => {
    return await axios
      .get(`http://localhost:3001/api/workout/workout/${id}`)
      .then((res) => {
        return res.data.data;
      });
  });
};

type ImageList = {
  [key: string]: string;
};

const ViewExercises: React.FC = () => {
  const params = useParams();

  const { data, isLoading } = useGetDataQuery(params.id);

  function importAll(r: __WebpackModuleApi.RequireContext) {
    let images: ImageList = {};
    r.keys().map((item) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images: ImageList = importAll(
    require.context("../assets/workout_icons/", false, /\.(svg)$/)
  );

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
                    img={images[`${exercise.exerciseName}.svg`]}
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
