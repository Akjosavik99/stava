import React from "react";
import styled from "styled-components";
import { Triangle } from "./Form";
import axios from "axios";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Workout } from '../utils/Workout';
import { WorkoutPlan } from '../utils/WorkoutPlan';

const Frame = styled.div`
  background-color: #f9dac3;
  height: 50vh;
  width: 60vw;
  margin-left: 30px;
  text-align: center;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  color: #f16a00;
  font-size: 4em;
  text-align: center;
  margin: 0
`;
const Page = styled.main`
height: 92vh;
overflow-y: hidden;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`;
const ProgramItem = styled.div`
margin: 20px;
border-bottom: black;
border-bottom: 2px solid #f16a00;
cursor: pointer;
`;
const Title2 = styled.h1`
  color: #f16a00;
  font-size: 3em;
  text-align: left;
  opacity: 1;
  margin: 0;
  cursor: pointer;
`;


const Programs: React.FC = () => {
  const [owners, setOwners] = useState<{ workoutPlan: WorkoutPlan }[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkoutPlans = async () => {
      try {
        const response = await axios.get<{ workoutPlan: WorkoutPlan }[]>(
          'http://localhost:3001/api/workout/plan'
        );
        setOwners(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWorkoutPlans();
  }, []);


  return (
    <>
      <Page>
        <Title>Your Programs</Title>
        <Frame>
        {owners.map((item, index) => (
          <ProgramItem key={index} onClick={() => {navigate(`/${item.workoutPlan.id}`)}}>
            <Title2>{item.workoutPlan.workoutPlanName}</Title2>
          </ProgramItem>
        ))}
        </Frame>
        <Triangle style={{height:'20px'}}>
        </Triangle>
      </Page>
    </>
  );
};



export default Programs;
