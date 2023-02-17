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
// import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const workoutList = [
  { day: "friday", name: "Cardio", url: "/ViewWorkouts" },
  { day: "monday", name: "Chest and Legs test", url: "/ViewWorkouts" },
  { day: "monday", name: "Chest and Legs test", url: "/login" },
];

const workoutList2 = [{ day: "friday", name: "Cardio", url: "/ViewWorkouts" }];

type Workout = {
  _id: string;
  owner: string;
  workoutname: string;
  exercises: [];
  date: string;
};

type WorkoutData = {
  // data: {
  //   _id: string;
  //   owner: string;
  //   workoutname: string;
  //   exercises: [];
  //   date: string;
  // };

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

  const { data } = useGetWorkoutsQuery("63ecac347c834875fc802556"); //63ecac347c834875fc802556

  function findWorkouts(day: any) {
    type Workout1 = {
      day: string;
      name: string;
      url: string;
    };
    let list: Workout1[] = [];
    workoutList.forEach((workout) => {
      if (workout.day === day) {
        list.push(workout);
      }
    });

    return list.map((workout) => (
      <DayContainerList onClick={() => navigate(workout.url)}>
        {workout.name}
        {", "}
      </DayContainerList>
    ));
  }

  function getWorkouts(id: string) {
    let list: Workout[] = data!.data;
    // list.forEach((workout) => {
    //   if (workout.owner === "Test") {
    //     list.push(workout);
    //   }
    // });
    return list.map((workout) => (
      <h1>test</h1>
      // <DayContainerList onClick={() => navigate("/")}>
      //   {workout.owner}
      //   {", "}
      // </DayContainerList>
    ));
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
            <DayContainer>{findWorkouts("monday")} </DayContainer>
            <DayContainer style={{ backgroundColor: "#ffdcc4" }}>
              {findWorkouts("tuesday")}
            </DayContainer>
            <DayContainer>{findWorkouts("wednesday")}</DayContainer>
            <DayContainer style={{ backgroundColor: "#ffdcc4" }}>
              {findWorkouts("thursday")}
            </DayContainer>
            <DayContainer>{findWorkouts("friday")}</DayContainer>
            <DayContainer style={{ backgroundColor: "#ffdcc4" }}>
              {findWorkouts("saturday")}
            </DayContainer>
            <DayContainer>{/* {getWorkouts("sunday")} */}</DayContainer>
          </WeekdayContainer>
        </DoubleContainer>
      </DataContainer>
    </>
  );
};

export default ViewWorkouts;
