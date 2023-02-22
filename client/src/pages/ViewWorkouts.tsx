import React from "react";
import axios from "axios";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import {
  WeekdayContainer,
  DataContainer,
  DayContainer,
  DoubleContainer,
  DayContainerList,
} from "../components/Form";
import { useNavigate, useParams } from "react-router-dom";
import { Workout, WorkoutPlan } from "../util/types";

const ViewWorkouts: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [workoutPlan, setWorkoutPlan] = React.useState<WorkoutPlan>(
    {} as WorkoutPlan
  );

  const getData = async (id: string) => {
    try {
      const res = await axios.get(
        `http://localhost:3001/api/workout/plan/${id}`
      );
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id === undefined) {
      return;
    }

    getData(params.id).then((res) => {
      setWorkoutPlan(res);
    });
  }, [params.id]);

  function getWorkouts(day: string) {
    type Data = {
      name: string;
      url: string;
    };
    try {
      const emptyList: Data[] = [];

      const workout: Workout[] = workoutPlan.workouts;
      for (const key in workout) {
        let len = workout[key].day.length;
        for (let i = 0; i < len; i++) {
          if (workout[key].day[i] === day) {
            emptyList.push({
              name: workoutPlan.workoutPlanName,
              url: "/viewexercises/" + workout[key].workout,
            });
          }
        }
      }

      return emptyList.map((element) => (
        <DayContainerList onClick={() => navigate(element.url)}>
          {element.name}
          {", "}
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
    </>
  );
};

export default ViewWorkouts;
