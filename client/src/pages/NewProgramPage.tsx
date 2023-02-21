import axios from 'axios';
import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitButton, Triangle } from '../components/Form';
import Navbar from '../components/Navbar';
import { Page, Title, FrameHolder, Frame, ProgramItem, Title2, Frame2, Frame3, Frame4, LabelField, LabelHolder, Subtitle, WeekdayHeader, WeekdayHolder, WeekDiv, WeekInput, WeekLabel, WorkoutName, WorkoutNameHolder, WorkoutNameHolder2, WorkoutPlanDiv } from '../components/NewProgram';
import {workout1, workout2} from '../tests/ExampleWorkouts'
import { Workout } from '../utils/Workout';
import { Weekday, WorkoutPlan } from '../utils/WorkoutPlan';



const weekdays: Weekday[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const emptyWorkoutPlan: WorkoutPlan = {
  id: '',
  owner: '',
  workoutPlanName: '',
  date: new Date(),
  followers: [],
  workoutSchedule: {
    'Mon': [],
    'Tue': [],
    'Wed': [],
    'Thu': [],
    'Fri': [],
    'Sat': [],
    'Sun': []
  }
};



const NewProgramsPage: React.FC = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [programName, setProgramName] = useState<string>('');
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);
  const [selectedWeekdays, setSelectedWeekdays] = useState<Record<Weekday, boolean>>({
    Mon: false,
    Tue: false,
    Wed: false,
    Thu: false,
    Fri: false,
    Sat: false,
    Sun: false,
  });
  const [workoutPlanName, setWorkoutPlanName] = useState('');
  const [workoutPlan, setWorkoutPlan] = useState<WorkoutPlan>();
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    // Check if the workout plan name is not empty and there are workouts scheduled in any day
    setIsDisabled(emptyWorkoutPlan.workoutPlanName === '' || Object.values(emptyWorkoutPlan.workoutSchedule).every((day) => day.length === 0));
  }, [emptyWorkoutPlan]);


  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get<{ workout: Workout }[]>(
          'http://localhost:3001/api/workout/workouts'
        );
        setWorkouts(response.data.map((data) => data.workout));
      } catch (error) {
        setWorkouts([workout1, workout2]);
        console.error(error);
      }
    };

    fetchWorkouts();
  }, []);

  const updateWorkoutPlanName = (name : string) => {
      emptyWorkoutPlan.workoutPlanName = name;
      setWorkoutPlanName(name);
      setIsDisabled(emptyWorkoutPlan.workoutPlanName === '' || Object.values(emptyWorkoutPlan.workoutSchedule).every((day) => day.length === 0));
  }

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
        if (workouts.some(workout => workout.id === item.id)) {
          selectedWeekdays[weekday] = true;
        }
      }
    }
    setSelectedWeekdays(selectedWeekdays);
  };
  

  const handleWeekdayClick = (selectedWorkout : Workout, weekday: Weekday) => {
    setSelectedWeekdays((prevSelectedWeekdays) => ({
      ...prevSelectedWeekdays,
      [weekday]: !prevSelectedWeekdays[weekday],
    }));

    if (emptyWorkoutPlan.workoutSchedule[weekday]) {
      const workouts = emptyWorkoutPlan.workoutSchedule[weekday]!;
      if (workouts.some(workout => workout.id === selectedWorkout.id)) {
        const updatedWorkouts = workouts.filter(workout => workout.id !== selectedWorkout.id);
        emptyWorkoutPlan.workoutSchedule[weekday] = updatedWorkouts;
      } else {
        const updatedWorkouts = [...workouts, selectedWorkout];
        emptyWorkoutPlan.workoutSchedule[weekday] = updatedWorkouts;
      }
    }
    setWorkoutPlan(emptyWorkoutPlan);
    setIsDisabled(emptyWorkoutPlan.workoutPlanName === '' || Object.values(emptyWorkoutPlan.workoutSchedule).every((day) => day.length === 0));

    
  };
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // Send POST request to create workout plan
      await axios.post('http://localhost:3001/api/workout/createplan', emptyWorkoutPlan);
      // Navigate to /programs
      navigate('/programs');
    } catch (error) {
      // Handle error
      console.error(error);
      navigate('/programs');
    }
  };




  
  return (
    <>
      <Navbar />
      <Page>
        <Title>New Program</Title>
        <FrameHolder>
          <Frame>
            {workouts.map((item) => (
              <ProgramItem key={item.id} onClick={() => handleItemClick(item)}>
                <Title2>{item.workoutname}</Title2>
              </ProgramItem>
            ))}
          </Frame>
          <Frame2>
          {selectedWorkout && (
              <Frame3>
                <Frame4>
                  <Subtitle>{selectedWorkout.workoutname}</Subtitle>
                  <LabelHolder>
                  {weekdays.map((weekday) => (
                    <WeekdayHolder>
                      
                      <WeekLabel key={weekday}>
                      {weekday.slice(0, 3)}
                    </WeekLabel>
                    <WeekInput
                        key={weekday}
                        type="checkbox"
                        checked={!!selectedWeekdays[weekday]}
                        onChange={() => handleWeekdayClick(selectedWorkout, weekday)}
                      />
                    </WeekdayHolder>
                  ))}
                  </LabelHolder>
                  
                </Frame4>
                <Frame4>
                  <Subtitle>
                    {workoutPlanName}
                  </Subtitle>
                  <WorkoutPlanDiv>
                   {weekdays.map((weekday) => (workoutPlan?.workoutSchedule[weekday]?.length && (

                    <WeekDiv>
                    <WorkoutNameHolder>
                    <WeekdayHeader>{weekday}</WeekdayHeader>
                    </WorkoutNameHolder>
                    <WorkoutNameHolder2>
                      {workoutPlan?.workoutSchedule[weekday]?.map((workout) => (
                        <WorkoutName>
                          {workout.workoutname}
                        </WorkoutName>
                        ))}
                    </WorkoutNameHolder2>
                    </WeekDiv>
                   ) || <></>))}
                  </WorkoutPlanDiv>
                </Frame4>
              </Frame3>
            )}
            {selectedWorkout && (
              <form onSubmit={handleSubmit}>
                <LabelField>
                  Workout Program Name:
                  <input
                    value={programName}
                    onChange={(event) => {setProgramName(event.target.value); updateWorkoutPlanName(event.target.value)}}
                  />
                </LabelField>
                <SubmitButton
                  type="submit"
                  disabled={isDisabled}
                >
                  Submit
                </SubmitButton>
              </form>
            )}
          </Frame2>
        </FrameHolder>
        <Triangle style={{ height: '20px' }}></Triangle>
      </Page>
    </>
  );
  
};


export default NewProgramsPage;
