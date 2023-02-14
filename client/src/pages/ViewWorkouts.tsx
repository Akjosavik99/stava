import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import {
  WeekdayContainer,
  DataContainer,
  DayContainer,
  DoubleContainer,
} from "../components/Form";

// const data = axios
//   .get(`http://localhost:3001/api/workout/plan`)
//   .then((response) => {
//     console.log(response);
//     return response.data.forEach((program: any) => {
//       <DayContainer>
//         <h1>{program.name}</h1>
//       </DayContainer>;
//     });
//   });

const ViewWorkouts: React.FC = () => {
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
            <DayContainer id="monday"> Chest and back</DayContainer>
            <DayContainer id="tuesday" style={{ backgroundColor: "#ffdcc4" }}>
              Chest and back
            </DayContainer>
            <DayContainer id="wednesday">Chest and back</DayContainer>
            <DayContainer id="thursday" style={{ backgroundColor: "#ffdcc4" }}>
              Chest and back
            </DayContainer>
            <DayContainer id="friday">Chest and back</DayContainer>
            <DayContainer id="saturday" style={{ backgroundColor: "#ffdcc4" }}>
              Chest and back
            </DayContainer>
            <DayContainer id="sunday">Chest and back</DayContainer>
          </WeekdayContainer>
        </DoubleContainer>
      </DataContainer>
    </>
  );
};

export default ViewWorkouts;
