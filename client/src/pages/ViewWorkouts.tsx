import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import {
  WeekdayContainer,
  DataContainer,
  DayContainer,
  DoubleContainer,
  DayContainerList,
} from "../components/Form";
import { useNavigate, useNavigation } from "react-router-dom";

const workoutList = [
  { day: "friday", name: "Cardio", url: "/ViewWorkouts" },
  { day: "monday", name: "Chest and Legs test", url: "/ViewWorkouts" },
  { day: "monday", name: "Chest and Legs test", url: "/login" },
];

const ViewWorkouts: React.FC = () => {
  const navigate = useNavigate();

  function findWorkouts(day: any) {
    type workout = {
      day: string;
      name: string;
      url: string;
    };
    let list = new Array();
    workoutList.forEach((workout) => {
      if (workout.day == day) {
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
            <DayContainer>{findWorkouts("sunday")}</DayContainer>
          </WeekdayContainer>
        </DoubleContainer>
      </DataContainer>
    </>
  );
};

export default ViewWorkouts;
