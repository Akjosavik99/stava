import styled from "styled-components";
import dumbell from "../assets/workout_icons/dumbell.svg";
import running from "../assets/workout_icons/running.svg";
import medicineball from "../assets/workout_icons/medicineBall.svg";
import yoga from "../assets/workout_icons/yoga.svg";
import stretching from "../assets/workout_icons/stretching.svg";
import pulldown from "../assets/workout_icons/pulldown.svg";
import situps from "../assets/workout_icons/situps.svg";
import hangups from "../assets/workout_icons/hangups.svg";
import jumping from "../assets/workout_icons/jumping.svg";
import bench from "../assets/workout_icons/bench.svg";
import cycle from "../assets/workout_icons/cycle.svg";

const Frame = styled.div`
  background-color: #f9dac3;
  height: 500px;
  width: 650px;
  margin-left: 30px;
  text-align: center;
  overflow: hidden;
  overflow-y: scroll;
  float: left;
  grid-template-columns: 150px 150px 250px;
  border-width: 2px;
  border-style: solid;
  border-color: black;
`;

const Title = styled.h1`
  color: #f16a00;
  font-size: 4em;
  text-align: center;
  margin: 0;
`;

const Title2 = styled.h1`
  color: #f16a00;
  font-size: 3em;
  text-align: center;
  opacity: 1;
  margin: 0;
`;

export const Button = styled.div`
  cursor: pointer;
  width: 10px;
  height: 190px;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 40px;
`;
const Image = styled.img`
  width: 8rem;
`;
const Column = styled.div`
  float: left;
  width: 33%;
`;

interface exercisesProps {
  updateExercises: (name: string, src: any) => void;
}

const MyExercises: React.FC<exercisesProps> = ({ updateExercises }) => {
  return (
    <>
      <Title>Create workout</Title>
      <Frame>
        <Title2>My excercices</Title2>
        <Column>
          <Button
            onClick={() => {
              updateExercises("dumbell", dumbell);
            }}
          >
            <Image src={dumbell} />
          </Button>
          <Button
            onClick={() => {
              updateExercises("yoga", yoga);
            }}
          >
            <Image src={yoga} />
          </Button>
          <Button
            onClick={() => {
              updateExercises("medicineBall", medicineball);
            }}
          >
            <Image src={medicineball} />
          </Button>
          <Button
            onClick={() => {
              updateExercises("situps", situps);
            }}
          >
            <Image src={situps} />
          </Button>
        </Column>
        <Column>
          <Button
            onClick={() => {
              updateExercises("pulldown", pulldown);
            }}
          >
            <Image src={pulldown} />
          </Button>
          <Button
            onClick={() => {
              updateExercises("hangups", hangups);
            }}
          >
            <Image src={hangups} />
          </Button>
          <Button
            onClick={() => {
              updateExercises("jumping", jumping);
            }}
          >
            <Image src={jumping} />
          </Button>
          <Button
            onClick={() => {
              updateExercises("bench", bench);
            }}
          >
            <Image src={bench} />
          </Button>
        </Column>
        <Column>
          <Button
            onClick={() => {
              updateExercises("cycle", cycle);
            }}
          >
            <Image src={cycle} />
          </Button>
          <Button
            onClick={() => {
              updateExercises("stretching", stretching);
            }}
          >
            <Image src={stretching} />
          </Button>
          <Button
            onClick={() => {
              updateExercises("running", running);
            }}
          >
            <Image src={running} id="running" />
          </Button>
        </Column>
      </Frame>
    </>
  );
};

export default MyExercises;
