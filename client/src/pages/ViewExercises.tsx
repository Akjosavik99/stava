import React from "react";

import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import {
  InnerExercisesContainer,
  OuterExercisesContainer,
} from "../styles/ExerciseForm";
import { DataContainer } from "../styles/WorkoutForm";
import Navbar from "../components/Navbar";
import ExerciseComponent from "../components/ExerciseComponent";
import { useGetDataQuery } from "../utils/api";

type ImageList = {
  [key: string]: string;
};

const ViewExercises: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetDataQuery(params.id);

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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <DataContainer>
        <OuterExercisesContainer>
          <TripleContainer>
            <SingleContainer>
              <ProgressButton onClick={() => navigate("/viewProgress")}>
                Progress
              </ProgressButton>
            </SingleContainer>
            <HeaderContainer>
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "4em",
                  width: "100%",
                }}
              >
                Exercises
              </h1>
            </HeaderContainer>
            {/* <SingleContainer></SingleContainer> */}
          </TripleContainer>

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
