import styled from "styled-components";

export const OuterExercisesContainer = styled.div`
  margin: 0px;
  padding: 0.1em;
  max-height: 600px;
  min-width: 650px;
  min-height: 600px;
  width: 60%;
  background-color: #ffc08e;
  border: 3px solid black;
  overflow-y: scroll;
`;

export const InnerExercisesContainer = styled.div`
  min-width: 650px;
  margin: 0px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

// The container with the exercises + reps/sets
export const ExerciseContainer = styled.div`
  max-width: 50%;
  flex: 50%;
  display: flex;
  justify-content: center;
`;

export const ExerciseImage = styled.img`
  width: 5em;
  height: 5em;
  margin: 0.5em;
`;

export const RepsSetsContainer = styled.div`
  margin: 0.5em;
  font-size: 1.2em;
  background-color: none;
`;
export const RepsSets = styled.p`
  border: 1px solid black;
  margin: 0.2em;
  font-size: 1.35em;
  font-weight: bold;
  text-align: center;
  background-color: white;
  border-radius: 4em;
  min-width: 6em;
  max-height: 1.5em;
`;
