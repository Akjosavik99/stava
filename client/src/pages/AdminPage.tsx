import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const OuterExercisesContainer = styled.div`
  margin: 0px;
  padding: 0.1em;
  max-height: 600px;
  min-height: 600px;
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

const AdminFunctions = styled.div`
  width: 40%;
  height: 600px;
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

const AdminPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <DataContainer>
        <OuterExercisesContainer>
          <InnerExercisesContainer />
        </OuterExercisesContainer>
        <AdminFunctions>
          <AdminFunction>
            <AdminButton>Create admin</AdminButton>
          </AdminFunction>
          <AdminFunction>
            <AdminButton>Remove as admin</AdminButton>
          </AdminFunction>
          <AdminFunction>
            <AdminButton>Back to Cardio Group</AdminButton>
          </AdminFunction>
        </AdminFunctions>
      </DataContainer>
    </div>
  );
};

export default AdminPage;
