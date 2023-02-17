import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import {
  WeekdayContainer,
  DataContainer,
  DayContainer,
  DoubleContainer,
  DayContainerList,
} from "../components/Form";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

type Workout = {
  _id: string;
  owner: string;
  workoutname: string;
  exercises: [];
  date: string;
};

type WorkoutData = {
  data: [Workout];
  status: string;
};

const useGetWorkoutsQuery = (id?: String) => {
  return useQuery(["workouts"], async () => {
    return await axios
      .get<WorkoutData>(`http://localhost:3001/api/workout/${id}`)
      .then((res) => {
        return res.data;
      });
  });
};

const ViewWorkouts: React.FC = () => {
  const navigate = useNavigate();

  // Test with this id: 63ecac347c834875fc802556 for now.
  // Will be replaced with the user's id once we got it.
  const { data } = useGetWorkoutsQuery("63ecac347c834875fc802556"); //63ecac347c834875fc802556

  function getWorkouts(day: string) {
    type Data = {
      name: string;
      url: string;
    };
    try {
      const emptyList: Data[] = [];
      const workouts: Workout[] = data!.data;
      for (var key in workouts) {
        //iterates thru the json object
        if (typeof workouts[key] === "string") {
          //check to see if the value is a string
          const str = String(workouts[key]); //converts the value to a string
          if (str === day) {
            emptyList.push({
              name: str,
              url: "/login", //change to workout url when implemented in backend
            });
          }
        }

        return emptyList.map((element) => (
          <DayContainerList onClick={() => navigate(element.url)}>
            {element.name}
            {", "}
          </DayContainerList>
        ));
      }
    } catch (error) {
      console.log("ERROR!!!!");
      console.log(error);
    }
  }

  console.log(data);

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
            <DayContainer>{getWorkouts("monday")} </DayContainer>
            <DayContainer style={{ backgroundColor: "#ffdcc4" }}>
              {getWorkouts("tuesday")}
            </DayContainer>
            <DayContainer>{getWorkouts("wednesday")}</DayContainer>
            <DayContainer style={{ backgroundColor: "#ffdcc4" }}>
              {getWorkouts("thursday")}
            </DayContainer>
            <DayContainer>{getWorkouts("friday")}</DayContainer>
            <DayContainer style={{ backgroundColor: "#ffdcc4" }}>
              {getWorkouts("saturday")}
            </DayContainer>
            <DayContainer>
              {getWorkouts("63ecac347c834875fc802556")}
            </DayContainer>
          </WeekdayContainer>
        </DoubleContainer>
      </DataContainer>
    </>
  );
};

export default ViewWorkouts;
