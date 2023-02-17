import React from "react";
import Navbar from "../components/Navbar";
import {
  DataContainer,
  ExerciseContainer,
  ExerciseImage,
  InnerExercisesContainer,
  OuterExercisesContainer,
  RepsSets,
  RepsSets as RepsSetsContainer,
} from "../components/Form";
import bench from "../assets/workout_icons/bench.svg";
import cycle from "../assets/workout_icons/cycle.svg";

const ViewExercises: React.FC = () => {
  return (
    <>
      <Navbar />
      <DataContainer>
        <OuterExercisesContainer>
          <h1 style={{ textAlign: "center" }}>Exercises</h1>
          <InnerExercisesContainer>
            <ExerciseContainer>
              <ExerciseImage src={bench}></ExerciseImage>
              <RepsSetsContainer
                style={{ backgroundColor: "transparent", border: "none" }}
              >
                <RepsSets>Reps: (insert)</RepsSets>
                <RepsSets>Sets: (insert)</RepsSets>
              </RepsSetsContainer>
            </ExerciseContainer>
            <ExerciseContainer>
              <ExerciseImage src={cycle}></ExerciseImage>
              <RepsSetsContainer>
                <RepsSets>Reps: (insert)</RepsSets>
                <RepsSets>Sets: (insert)</RepsSets>
              </RepsSetsContainer>
            </ExerciseContainer>
            <ExerciseContainer>
              <ExerciseImage src={cycle}></ExerciseImage>
              <RepsSetsContainer>
                <RepsSets>Reps: (insert)</RepsSets>
                <RepsSets>Sets: (insert)</RepsSets>
              </RepsSetsContainer>
            </ExerciseContainer>
            <ExerciseContainer>
              <ExerciseImage src={cycle}></ExerciseImage>
              <RepsSetsContainer>
                <RepsSets>Reps: (insert)</RepsSets>
                <RepsSets>Sets: (insert)</RepsSets>
              </RepsSetsContainer>
            </ExerciseContainer>
            <ExerciseContainer>
              <ExerciseImage src={cycle}></ExerciseImage>
              <RepsSetsContainer>
                <RepsSets>Reps: (insert)</RepsSets>
                <RepsSets>Sets: (insert)</RepsSets>
              </RepsSetsContainer>
            </ExerciseContainer>
            <ExerciseContainer>
              <ExerciseImage src={cycle}></ExerciseImage>
              <RepsSetsContainer>
                <RepsSets>Reps: (insert)</RepsSets>
                <RepsSets>Sets: (insert)</RepsSets>
              </RepsSetsContainer>
            </ExerciseContainer>
            <ExerciseContainer>
              <ExerciseImage src={cycle}></ExerciseImage>
              <RepsSetsContainer>
                <RepsSets>Reps: (insert)</RepsSets>
                <RepsSets>Sets: (insert)</RepsSets>
              </RepsSetsContainer>
            </ExerciseContainer>
            <ExerciseContainer>
              <ExerciseImage src={cycle}></ExerciseImage>
              <RepsSetsContainer>
                <RepsSets>Reps: (insert)</RepsSets>
                <RepsSets>Sets: (insert)</RepsSets>
              </RepsSetsContainer>
            </ExerciseContainer>
            <ExerciseContainer>
              <ExerciseImage src={cycle}></ExerciseImage>
              <RepsSetsContainer>
                <RepsSets>Reps: (insert)</RepsSets>
                <RepsSets>Sets: (insert)</RepsSets>
              </RepsSetsContainer>
            </ExerciseContainer>
          </InnerExercisesContainer>
        </OuterExercisesContainer>
      </DataContainer>
    </>
  );
};

export default ViewExercises;
