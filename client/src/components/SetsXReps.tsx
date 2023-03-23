import React, { useEffect } from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 4rem;
`;
const Frame1 = styled.div`
  height: 100px;
  width: 300px;
`;
const H1 = styled.h1`
  color: black;
  font-size: 1.5em;
  margin: 0;
  float: left;
`;
const Column = styled.div`
  float: left;
  width: 50%;
`;
const InputField = styled.input`
  background-color: white;
  border-radius: 2rem;
  height: 1rem;
  width: 4rem;
  margin: 0;
`;

const Row = styled.div`
  margin-top: 7px;
  grid-row: 1/2;
  height: 30px;
`;

interface setsXRepsProps {
  source: string;
  index: number;
  updateSets: (sets: number, index: number) => void;
  updateReps: (reps: number, index: number) => void;
}

type ImageList = {
  [key: string]: string;
};

const SetsXReps: React.FC<setsXRepsProps> = ({
  source,
  index,
  updateSets,
  updateReps,
}) => {
  const [sets, setSets] = React.useState(0);
  const [reps, setReps] = React.useState(0);

  // Function to dynamically import all images from a folder
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

  useEffect(() => {
    updateSets(sets, index);
    updateReps(reps, index);
  }, [sets, reps]);

  return (
    <Frame1>
      <Column>
        <Image src={images[`${source}.svg`]} />
      </Column>
      <Column>
        <Row>
          <H1>Sets: </H1>
          <InputField
            type="number"
            onChange={(e) => setSets(e.target.valueAsNumber)}
          />
        </Row>
        <Row>
          <H1>Reps: </H1>
          <InputField
            type="number"
            onChange={(e) => setReps(e.target.valueAsNumber)}
          />
        </Row>
      </Column>
    </Frame1>
  );
};

export default SetsXReps;
