import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Triangle } from "../styles/Form";

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

const AdminFunctionsContainer = styled.div`
  width: 40%;
  height: 500px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const AdminFunction = styled.div`
  width: 100%;
  background-color: #ffc08e;
  height: 100px;
  border: 2px solid black;
  display: flex;
`;

const AdminButton = styled.button`
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

// There will have to be a way to get all users from a certain group, and display them here.
const AdminPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <StyledHeader>Manage admins</StyledHeader>
      <DataContainer>
        <OuterExercisesContainer>
          <InnerExercisesContainer />
        </OuterExercisesContainer>
        <AdminFunctionsContainer>
          <AdminFunction>
            <AdminButton>Create admin</AdminButton>
          </AdminFunction>
          <AdminFunction>
            <AdminButton>Remove as admin</AdminButton>
          </AdminFunction>
          <AdminFunction>
            <AdminButton>Back to Cardio Group</AdminButton>
          </AdminFunction>
        </AdminFunctionsContainer>
      </DataContainer>
      <Triangle style={{ height: "20px" }}></Triangle>
    </>
  );
};

export default AdminPage;
