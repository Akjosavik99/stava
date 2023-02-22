import React from "react";
import {
  ExerciseContainer,
  ExerciseImage,
  RepsSetsContainer,
  RepsSets,
} from "./Form";

type Props = {
  img: string;
  reps: number;
  sets: number;
};

const ExerciseComponent: React.FC<Props> = ({ img, reps, sets }: Props) => {
  return (
    <ExerciseContainer>
      <ExerciseImage src={img} alt={img}></ExerciseImage>
      <RepsSetsContainer>
        <RepsSets>Reps: {reps}</RepsSets>
        <RepsSets>Sets: {sets}</RepsSets>
      </RepsSetsContainer>
    </ExerciseContainer>
  );
};

export default ExerciseComponent;
