import React from "react";
import Navbar from "../components/Navbar";
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
              <RepsSetsContainer>
                <RepsSets>Reps: 6</RepsSets>
                <RepsSets>Sets: 3</RepsSets>
              </RepsSetsContainer>
            </ExerciseContainer>
            <ExerciseContainer>
              <ExerciseImage src={cycle}></ExerciseImage>
              <RepsSetsContainer>
                <RepsSets>Reps: 6</RepsSets>
                <RepsSets>Sets: 2</RepsSets>
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
                <RepsSets>Reps: 4</RepsSets>
                <RepsSets>Sets: 5</RepsSets>
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
