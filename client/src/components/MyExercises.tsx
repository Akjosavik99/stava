import styled from "styled-components";
import {
  Frame,
  Title,
  Title2,
  Button,
  Image,
  WorkoutsContainer,
} from "../styles/MyExercises";

interface exercisesProps {
  updateExercises: (name: string) => void;
}

type ImageList = {
  [key: string]: string;
};

const MyExercises: React.FC<exercisesProps> = ({ updateExercises }) => {
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

  const imageNames = Object.keys(images).map(
    (image: string) => image.split(".")[0]
  );

  return (
    <>
      <Title>Create workout</Title>
      <Frame>
        <Title2>My exercises</Title2>
        <WorkoutsContainer>
          {imageNames.map((image: string) => {
            return (
              <Button
                onClick={() => {
                  updateExercises(image);
                }}
              >
                <Image src={images[`${image}.svg`]} />
              </Button>
            );
          })}
        </WorkoutsContainer>
      </Frame>
    </>
  );
};

export default MyExercises;
