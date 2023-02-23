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
} from "../components/WorkoutForm";
import { useNavigate, useParams } from "react-router-dom";
import {
  Workout,
  WorkoutPlan,
  ExerciseData,
  Exercises,
  ServerExerciseData,
} from "../util/workoutExerciseTypes";

const delay = (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const ViewWorkouts: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [workoutPlan, setWorkoutPlan] = React.useState<WorkoutPlan>(
    {} as WorkoutPlan
  );
  const [workout, setWorkout] = React.useState<Exercises[]>([]);
  const [reload, setReload] = React.useState<boolean>(false);

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

  const getWorkoutData = async (id: string) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/workout/workout/${id}`
      );
      return (await response.json()) as ServerExerciseData;
    } catch (error) {
      console.log(error);
    }
  };

  const getWorkoutName = (id: string | undefined) => {
    try {
      if (id == undefined) {
        return "No id";
      }
      for (const key in workout) {
        if (workout[key]._id == id) {
          return workout[key].workoutname;
        }
      }
      return "Error";
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, [reload]);

  useEffect(() => {
    if (params.id === undefined) {
      return;
    }
    getData(params.id).then((res) => {
      setWorkoutPlan(res);
    });
  }, [params.id]);

  useEffect(() => {
    delay(500).then(() => {
      for (const key in workoutPlan.workouts) {
        getWorkoutData(workoutPlan.workouts[key].workout).then((res) => {
          if (res == undefined) return;
          workout.push(res.data);
          setWorkout(workout);
        });
      }
    });
  }, [workoutPlan]);

  function getWorkouts(day: string) {
    try {
      const emptyList: ExerciseData[] = [];

      const tmpworkout: Workout[] = workoutPlan.workouts;
      for (const key in tmpworkout) {
        let len = tmpworkout[key].day.length;
        for (let i = 0; i < len; i++) {
          const name = getWorkoutName(tmpworkout[key].workout);
          if (tmpworkout[key].day[i] === day && name != "Error") {
            console.log("pushing");
            emptyList.push({
              name: name,
              url: "/viewexercises/" + tmpworkout[key].workout,
            });
          }
        }
      }
      console.log(day);
      const res = emptyList.map((element) => (
        <DayContainerList
          key={element.url}
          onClick={() => navigate(element.url)}
        >
          {element.name}
          {", "}
        </DayContainerList>
      ));
      console.log(res);
      return res;
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
