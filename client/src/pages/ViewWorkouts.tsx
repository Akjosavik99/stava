import React from "react";
import Navbar from "../components/Navbar";
import {
  WeekdayContainer,
  DataContainer,
  DayContainer,
  DoubleContainer,
  DayContainerList,
} from "../styles/WorkoutForm";
import { useNavigate, useParams } from "react-router-dom";
import { ExerciseData, WorkoutInfo } from "../types/workoutExerciseTypes";
import { useGetWorkoutDataQuery } from "../utils/api";
import Loading from "../components/Loading";
import SharePopUp from "../components/SharePopUp";

const ViewWorkouts: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { data, isLoading } = useGetWorkoutDataQuery(params.id as string);

  if (isLoading) {
    return <Loading />;
  }

  function getWorkouts(day: string) {
    try {
      const emptyList: ExerciseData[] = [];

      const workouts: WorkoutInfo[] = data!.workouts;
      for (let j = 0; j < workouts.length; j++) {
        let len = workouts[j].day.length;
        for (let i = 0; i < len; i++) {
          if (workouts[j].day[i] === day) {
            emptyList.push({
              name: workouts[j].workoutName,
              url: "/viewexercises/" + workouts[j].workoutID,
            });
          }
        }
      }

      return emptyList.map((element) => (
        <DayContainerList onClick={() => navigate(element.url)}>
          {element.name}{" "}
        </DayContainerList>
      ));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <DataContainer>
        <DoubleContainer>
          <WeekdayContainer
            style={{ minWidth: "100px", borderRight: "3px solid black" }}
          >
            <DayContainer>Monday</DayContainer>
            <DayContainer style={{ backgroundColor: "#ffdcc4" }}>
              Tuesday
            </DayContainer>
            <DayContainer>Wednesday</DayContainer>
            <DayContainer style={{ backgroundColor: "#ffdcc4" }}>
              Thursday
            </DayContainer>
            <DayContainer>Friday</DayContainer>
            <DayContainer style={{ backgroundColor: "#ffdcc4" }}>
              Saturday
            </DayContainer>
            <DayContainer>Sunday</DayContainer>
          </WeekdayContainer>
          <WeekdayContainer>
            <DayContainer>{getWorkouts("Mon")} </DayContainer>
            <DayContainer style={{ backgroundColor: "#ffdcc4" }}>
              {getWorkouts("Tue")}
            </DayContainer>
            <DayContainer>{getWorkouts("Wed")}</DayContainer>
            <DayContainer style={{ backgroundColor: "#ffdcc4" }}>
              {getWorkouts("Thu")}
            </DayContainer>
            <DayContainer>{getWorkouts("Fri")}</DayContainer>
            <DayContainer style={{ backgroundColor: "#ffdcc4" }}>
              {getWorkouts("Sat")}
            </DayContainer>
            <DayContainer>{getWorkouts("Sun")}</DayContainer>
          </WeekdayContainer>
        </DoubleContainer>
      </DataContainer>
      <SharePopUp/>

    </>
  );
};

export default ViewWorkouts;
