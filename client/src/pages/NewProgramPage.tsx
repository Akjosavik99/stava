import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

let emptyWorkoutPlan: CorrectWorkoutPlan = {
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
  const navigate = useNavigate();
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
  const [workoutPlan, setWorkoutPlan] =
    useState<CorrectWorkoutPlan>(emptyWorkoutPlan);
  const [isDisabled, setIsDisabled] = useState(true);

  const { data } = useFetchWorkouts();

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

  const updateWorkoutPlanName = (name: string) => {
    setWorkoutPlanName(name);

    workoutPlan.workoutPlanName = name;
    setWorkoutPlan(workoutPlan);

    setIsDisabled(
      workoutPlan.workoutPlanName === "" ||
        workoutPlan.workouts.some((workout) => workout.day[0] === "")
    );
  };

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

    console.log(selectedWorkout);

    const tempWorkoutPlan = { ...workoutPlan };
    tempWorkoutPlan.workouts = newWorkouts;
    setWorkoutPlan(tempWorkoutPlan);

    setIsDisabled(
      workoutPlan.workoutPlanName === "" ||
        workoutPlan.workouts.some((workout) => workout.day[0] === "")
    );
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // Send POST request to create workout plan
      await axios.post("http://localhost:3001/api/workout/plan", workoutPlan);

      // Navigate to /programs
      navigate("/programs");
    } catch (error) {
      // Handle error
      console.error(error);
    }
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
                                {/* {workoutPlan?.workoutSchedule[weekday]?.map(
                                  (workout, index) => (
                                    <WorkoutName key={index}>
                                      {workout.workoutname}
                                    </WorkoutName>
                                  )
                                )} */}
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
