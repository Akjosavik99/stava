import React from "react";
import {
  ExerciseContainer,
  ExerciseImage,
  RepsSetsContainer,
  RepsSets,
} from "./Form";
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

type Props = {
  img: string;
  reps: number;
  sets: number;
};

const ExerciseComponent: React.FC<Props> = ({ img, reps, sets }: Props) => {
  return (
    <ExerciseContainer>
      <ExerciseImage
        src={`../assets/workout_icons/${img}.svg`}
        alt={img}
      ></ExerciseImage>
      <RepsSetsContainer>
        <RepsSets>Reps: {reps}</RepsSets>
        <RepsSets>Sets: {sets}</RepsSets>
        <RepsSets>Sets: {img}</RepsSets>
      </RepsSetsContainer>
    </ExerciseContainer>
  );
};

export default ExerciseComponent;
