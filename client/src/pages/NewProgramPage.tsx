import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitButton, Triangle } from "../components/Form";
import Navbar from "../components/Navbar";
import {
  Page,
  Title,
  FrameHolder,
  Frame,
  ProgramItem,
  Title2,
  Frame2,
  Frame3,
  Frame4,
  LabelField,
  LabelHolder,
  Subtitle,
  WeekdayHeader,
  WeekdayHolder,
  WeekDiv,
  WeekInput,
  WeekLabel,
  WorkoutName,
  WorkoutNameHolder,
  WorkoutNameHolder2,
  WorkoutPlanDiv,
} from "../components/NewProgram";
import { Workout } from "../types/workoutExerciseTypes";
import { WorkoutPlan as CorrectWorkoutPlan } from "../types/workoutExerciseTypes";
import { useFetchWorkouts } from "../utils/api";

axios.defaults.withCredentials = true;

const weekdays: Weekday[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

type Weekday = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
interface WorkoutPlan {
  _id: string;
  owner: string;
  workoutPlanName: string;
  date: Date;
  followers: string[];
  workoutSchedule: {
    [weekday in Weekday]?: Workout[];
  };
}
let emptyWorkoutPlan: WorkoutPlan;

const NewProgramsPage: React.FC = () => {
  const navigate = useNavigate();
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [programName, setProgramName] = useState<string>("");
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);
  const [selectedWeekdays, setSelectedWeekdays] = useState<
    Record<Weekday, boolean>
  >({
    Mon: false,
    Tue: false,
    Wed: false,
    Thu: false,
    Fri: false,
    Sat: false,
    Sun: false,
  });
  const [workoutPlanName, setWorkoutPlanName] = useState("");
  const [workoutPlan, setWorkoutPlan] = useState<WorkoutPlan>(emptyWorkoutPlan);
  const [isDisabled, setIsDisabled] = useState(true);
  const { data } = useFetchWorkouts();

  /* useEffect(() => {
    // Check if the workout plan name is not empty and there are workouts scheduled in any day
    emptyWorkoutPlan = {
      _id: "",
      owner: "",
      workoutPlanName: "",
      date: new Date(),
      followers: [],
      workoutSchedule: {
        Mon: [],
        Tue: [],
        Wed: [],
        Thu: [],
        Fri: [],
        Sat: [],
        Sun: [],
      },
    };
    setIsDisabled(
      emptyWorkoutPlan.workoutPlanName === "" ||
        Object.values(emptyWorkoutPlan.workoutSchedule).every(
          (day) => day.length === 0
        )
    );
  }, [emptyWorkoutPlan]); */

  /* useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get<any>(
          "http://localhost:3001/api/workout/workouts"
        );
        setWorkouts(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWorkouts();
  }, []); */

  const updateWorkoutPlanName = (name: string) => {
    emptyWorkoutPlan.workoutPlanName = name;
    setWorkoutPlanName(name);
    setIsDisabled(
      emptyWorkoutPlan.workoutPlanName === "" ||
        Object.values(emptyWorkoutPlan.workoutSchedule).every(
          (day) => day.length === 0
        )
    );
  };

  const handleItemClick = (item: Workout) => {
    setSelectedWorkout(item);
    const selectedWeekdays: { [weekday in Weekday]: boolean } = {
      Mon: false,
      Tue: false,
      Wed: false,
      Thu: false,
      Fri: false,
      Sat: false,
      Sun: false,
    };
    for (const weekday of weekdays) {
      if (emptyWorkoutPlan.workoutSchedule[weekday]) {
        const workouts = emptyWorkoutPlan.workoutSchedule[weekday] || [];
        if (workouts.some((workout) => workout._id === item._id)) {
          selectedWeekdays[weekday] = true;
        }
      }
    }
    setSelectedWeekdays(selectedWeekdays);
  };

  const handleWeekdayClick = (selectedWorkout: Workout, weekday: Weekday) => {
    setSelectedWeekdays((prevSelectedWeekdays) => ({
      ...prevSelectedWeekdays,
      [weekday]: !prevSelectedWeekdays[weekday],
    }));

    if (emptyWorkoutPlan.workoutSchedule[weekday]) {
      const workouts = emptyWorkoutPlan.workoutSchedule[weekday]!;
      if (workouts.some((workout) => workout._id === selectedWorkout._id)) {
        const updatedWorkouts = workouts.filter(
          (workout) => workout._id !== selectedWorkout._id
        );
        emptyWorkoutPlan.workoutSchedule[weekday] = updatedWorkouts;
      } else {
        const updatedWorkouts = [...workouts, selectedWorkout];
        emptyWorkoutPlan.workoutSchedule[weekday] = updatedWorkouts;
      }
    }
    /* if (emptyWorkoutPlan.workoutSchedule[weekday]) {
      const workouts = emptyWorkoutPlan.workoutSchedule[weekday]!;
      if (workouts.some((workout) => workout._id === selectedWorkout._id)) {
        const updatedWorkouts = workouts.filter(
          (workout) => workout._id !== selectedWorkout._id
        );
        emptyWorkoutPlan.workoutSchedule[weekday] = updatedWorkouts;
      } else {
        const updatedWorkouts = [...workouts, selectedWorkout];
        emptyWorkoutPlan.workoutSchedule[weekday] = updatedWorkouts;
      }
    } */
    setWorkoutPlan(emptyWorkoutPlan);
    setIsDisabled(
      emptyWorkoutPlan.workoutPlanName === "" ||
        Object.values(emptyWorkoutPlan.workoutSchedule).every(
          (day) => day.length === 0
        )
    );
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      let newWorkoutPlan: CorrectWorkoutPlan = {
        _id: "",
        owner: "",
        workoutPlanName: "",
        date: new Date(),
        followers: [],
        workouts: [
          {
            workoutID: "",
            workoutName: "",
            days: [""],
          },
        ],
      };

      newWorkoutPlan.workoutPlanName = emptyWorkoutPlan.workoutPlanName;
      for (const [key, value] of Object.entries(
        emptyWorkoutPlan.workoutSchedule
      )) {
        value.forEach((workout) => {
          let setWorkout = false;
          newWorkoutPlan.workouts.forEach((elm) => {
            if (elm["workoutID"] == "") {
              elm["workoutID"] = workout._id;
              elm["workoutName"] = workout.workoutname;
              elm["days"] = [key];
              setWorkout = !setWorkout;
            }
          });
          if (!setWorkout) {
            newWorkoutPlan.workouts.forEach((elm) => {
              if (elm["workoutID"] == workout._id) {
                if (!elm["days"].includes(key)) {
                  elm["days"].push(key);
                }
                setWorkout = !setWorkout;
              }
            });
          }
          if (!setWorkout) {
            newWorkoutPlan.workouts.push({
              workoutID: workout._id,
              workoutName: workout.workoutname,
              days: [key],
            });
            setWorkout = !setWorkout;
          }
        });
      }
      // Send POST request to create workout plan
      await axios.post(
        "http://localhost:3001/api/workout/plan",
        newWorkoutPlan
      );

      // Navigate to /programs
      navigate("/programs");
    } catch (error) {
      // Handle error
      console.error(error);
      navigate("/programs");
    }
  };

  return (
    <>
      <Navbar />
      <Page>
        <Title>New Program</Title>
        <FrameHolder>
          <Frame>
            {workouts?.map((item) => (
              <ProgramItem
                key={item.workoutname + item._id}
                onClick={() => handleItemClick(item)}
              >
                <Title2>{item.workoutname}</Title2>
              </ProgramItem>
            ))}
          </Frame>
          <Frame2>
            {selectedWorkout ? (
              <Frame3 key={selectedWorkout._id}>
                <Frame4>
                  <Subtitle>{selectedWorkout.workoutname}</Subtitle>
                  <LabelHolder>
                    {weekdays.map((weekday) => (
                      <WeekdayHolder key={selectedWorkout._id + weekday}>
                        <WeekLabel>{weekday.slice(0, 3)}</WeekLabel>
                        <WeekInput
                          key={"input" + weekday}
                          type="checkbox"
                          checked={!!selectedWeekdays[weekday]}
                          onChange={() =>
                            handleWeekdayClick(selectedWorkout, weekday)
                          }
                        />
                      </WeekdayHolder>
                    ))}
                  </LabelHolder>
                </Frame4>
                <Frame4>
                  <Subtitle>{workoutPlanName}</Subtitle>
                  <WorkoutPlanDiv>
                    {weekdays.map(
                      (weekday) =>
                        (workoutPlan?.workoutSchedule[weekday]?.length && (
                          <WeekDiv>
                            <WorkoutNameHolder>
                              <WeekdayHeader>{weekday}</WeekdayHeader>
                            </WorkoutNameHolder>
                            <WorkoutNameHolder2>
                              {workoutPlan?.workoutSchedule[weekday]?.map(
                                (workout, index) => (
                                  <WorkoutName key={index}>
                                    {workout.workoutname}
                                  </WorkoutName>
                                )
                              )}
                            </WorkoutNameHolder2>
                          </WeekDiv>
                        )) || <></>
                    )}
                  </WorkoutPlanDiv>
                </Frame4>
              </Frame3>
            ) : (
              <h1>Select a workout</h1>
            )}
            {selectedWorkout && (
              <form onSubmit={handleSubmit}>
                <LabelField>
                  Workout Program Name:
                  <input
                    value={programName}
                    onChange={(event) => {
                      setProgramName(event.target.value);
                      updateWorkoutPlanName(event.target.value);
                    }}
                  />
                </LabelField>
                <SubmitButton type="submit" disabled={isDisabled}>
                  Submit
                </SubmitButton>
              </form>
            )}
          </Frame2>
        </FrameHolder>
        <Triangle style={{ height: "20px" }}></Triangle>
      </Page>
    </>
  );
};

export default NewProgramsPage;
