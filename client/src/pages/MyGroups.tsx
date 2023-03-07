import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import styled from "styled-components";
import { Triangle } from "../styles/Form";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";

const StyledHeader = styled.h1`
  font-size: 3em;
  text-align: center;
  color: #f16a00;
`;

const OuterExercisesContainer = styled.div`
  margin: 0px;
  padding: 0.1em;
  max-height: 400px;
  min-height: 500px;
  width: 50%;
  background-color: #ffc08e;
  border: 3px solid black;
  overflow-y: scroll;
`;

const InnerExercisesContainer = styled.div`
  min-width: 650px;
  margin: 0px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const DataContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  padding: 2em;
`;

const GroupFunctionsContainer = styled.div`
  width: 40%;
  height: 500px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const GroupFunction = styled.div`
  width: 100%;
  background-color: #ffc08e;
  height: 100px;
  border: 2px solid black;
  display: flex;
`;

const GroupButton = styled.button`
  width: 90%;
  height: 60%;
  margin: auto;
  border-radius: 20px;
  background-color: #f16a00;
  border: 0px;
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

// This will be implemented once the backend is ready

/* const useGetGroupsQuery = () => {
  return useQuery(["groups"], async () => {
    return await axios.get("http://localhost:3001/api/groups").then((res) => {
      return res.data;
    });
  });
}; */

const MyGroups: React.FC = () => {
  // This will be implemented once the backend is ready

  /* const { data, isLoading, isError } = useGetGroupsQuery(); */
  /* if (isLoading) {
    return <Loading />;
  } */

  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      <StyledHeader>Your groups</StyledHeader>
      <DataContainer>
        <OuterExercisesContainer>
          <InnerExercisesContainer />
        </OuterExercisesContainer>
        <GroupFunctionsContainer>
          <GroupFunction>
            <GroupButton>Join group</GroupButton>
          </GroupFunction>
          <GroupFunction>
            <GroupButton>Add group</GroupButton>
          </GroupFunction>
        </GroupFunctionsContainer>
      </DataContainer>
      <Triangle
        style={{ height: "20px", position: "absolute", bottom: 0 }}
      ></Triangle>
    </div>
  );
};

export default MyGroups;
