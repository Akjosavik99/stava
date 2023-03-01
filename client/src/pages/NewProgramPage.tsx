import axios from "axios";
import { useState } from "react";
import { SubmitButton, Triangle } from "../styles/Form";
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
} from "../styles/NewProgram";
import { Workout, WorkoutInfo } from "../types/workoutExerciseTypes";
import { WorkoutPlan } from "../types/workoutExerciseTypes";
import { useCreateWorkoutPlanMutation, useFetchWorkouts } from "../utils/api";

axios.defaults.withCredentials = true;

const weekdays: Weekday[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

type Weekday = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

let emptyWorkoutPlan: WorkoutPlan = {
  _id: "",
  owner: "",
  workoutPlanName: "",
  date: new Date(),
  followers: [],
  workouts: [
    {
      workoutID: "",
      workoutName: "",
      day: [""],
    },
  ],
};

const NewProgramsPage: React.FC = () => {
  const [workouts, setWorkouts] = useState<WorkoutInfo[]>([]);
  const [selectedWorkout, setSelectedWorkout] = useState<WorkoutInfo | null>(
    null
  );
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

  const { mutate } = useCreateWorkoutPlanMutation();

  // Adds the selected workout to the workout plan
  const handleAddWorkout = (workout: WorkoutInfo) => {
    if (workouts.includes(workout)) {
      return;
    }
    if (workouts.length === 0) {
      setWorkouts([workout]);
      return;
    }
    let newWorkouts = [...workouts, workout];
    setWorkouts(newWorkouts);
  };

  // When writing a workout plan name, update the workout plan name-state
  const updateWorkoutPlanName = (name: string) => {
    setWorkoutPlanName(name);

    workoutPlan.workoutPlanName = name;
    setWorkoutPlan(workoutPlan);

    // If title is empty or no weekdays are selected, disable the submit button
    setIsDisabled(
      workoutPlan.workoutPlanName === "" ||
        workoutPlan.workouts.some((workout) => workout.day[0] === "")
    );
  };

  // Function to handle clicks on the workout items
  const handleItemClick = (item: Workout) => {
    const workoutInfo: WorkoutInfo = {
      workoutID: item._id,
      workoutName: item.workoutname,
      day: [],
    };

    handleAddWorkout(workoutInfo);
    setSelectedWorkout(workoutInfo);
    const selectedWeekdays: { [weekday in Weekday]: boolean } = {
      Mon: false,
      Tue: false,
      Wed: false,
      Thu: false,
      Fri: false,
      Sat: false,
      Sun: false,
    };
    const temp = workouts.find((workout) => workout.workoutID === item._id);
    temp?.day.forEach((element) => {
      selectedWeekdays[element as Weekday] = true;
    });
    setSelectedWeekdays(selectedWeekdays);
  };

  // When clicking a weekday-checkbox, update states and display the selected weekdays on the right
  const handleWeekdayClick = (
    selectedWorkout: WorkoutInfo,
    weekday: Weekday
  ) => {
    setSelectedWeekdays((prevSelectedWeekdays) => ({
      ...prevSelectedWeekdays,
      [weekday]: !prevSelectedWeekdays[weekday],
    }));
    if (!selectedWorkout.day.includes(weekday)) {
      selectedWorkout.day.push(weekday);
    } else {
      selectedWorkout.day = selectedWorkout.day.filter(
        (day) => day !== weekday
      );
    }

    const temp = workouts.findIndex(
      (workout) => workout.workoutID === selectedWorkout.workoutID
    );
    const newWorkouts = [...workouts];
    newWorkouts[temp] = selectedWorkout;
    setWorkouts(newWorkouts);

    const tempWorkoutPlan = { ...workoutPlan };
    tempWorkoutPlan.workouts = newWorkouts;
    setWorkoutPlan(tempWorkoutPlan);

    // If title is empty or no weekdays are selected, disable the submit button
    setIsDisabled(
      workoutPlan.workoutPlanName === "" ||
        workoutPlan.workouts.some((workout) => workout.day[0] === "")
    );
  };

  return (
    <>
      <Navbar />
      <Page>
        <Title>New Program</Title>
        <FrameHolder>
          <Frame>
            {data?.map((item) => (
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
              <Frame3 key={selectedWorkout.workoutID}>
                <Frame4>
                  <Subtitle>{selectedWorkout.workoutName}</Subtitle>
                  <LabelHolder>
                    {weekdays.map((weekday) => (
                      <WeekdayHolder key={selectedWorkout.workoutID + weekday}>
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
                        (workoutPlan?.workouts.length &&
                          workoutPlan?.workouts.some((workout) =>
                            workout.day.includes(weekday as string)
                          ) && (
                            <WeekDiv>
                              <WorkoutNameHolder>
                                <WeekdayHeader>{weekday}</WeekdayHeader>
                              </WorkoutNameHolder>
                              <WorkoutNameHolder2>
                                {workoutPlan?.workouts.map(
                                  (workout, index) =>
                                    workout.day.includes(weekday as string) && (
                                      <WorkoutName key={index}>
                                        {workout.workoutName}
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
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  mutate(workoutPlan);
                }}
              >
                <LabelField>
                  Workout Program Name:
                  <input
                    value={workoutPlanName}
                    onChange={(event) => {
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
