import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Triangle } from "../styles/Form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetGroupQuery, useUpdateGroupMutation } from "../utils/api";
import Loading from "../components/Loading";
import { GroupData } from "../types/groupTypes";

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

const GroupName = styled.label`
  font-size: 24px;
  font-weight: bold;
  margin-left: 2rem;
  margin-top: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

// There will have to be a way to get all users from a certain group, and display them here.
const AdminPage: React.FC = () => {
  const [selectedMembers, setSelectedMembers] = useState<
    { userName: string; userID: string }[]
  >([]);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const groupId = searchParams.get("groupId");

  const { data, isLoading, isError } = useGetGroupQuery(groupId || "");
  const { mutate } = useUpdateGroupMutation(groupId || "");

  const goBackToGroup = () => {
    // redirect to group page
    navigate(`/groups/${groupId}`);
  };

  const handleCreateAdmin = (
    userList: { userName: string; userID: string }[]
  ) => {
    userList.forEach((user) => {
      data?.owners.push(user);
    });
    mutate(data!);
  };

  const handleRemoveMember = (
    userList: { userName: string; userID: string }[]
  ) => {
    userList.forEach((user) => {
      const index = data?.members.findIndex(
        (tempUser) => tempUser.userID === user.userID
      );
      console.log(index);
      if (index! > -1) {
        data?.members.splice(index!, 1)!;
        console.log("now");
      }
    });
    console.log(data?.members);
    /* const index = data?.members.indexOf({ userName, userID }); */

    mutate(data!);
  };

  if (isError) return <h1>Something went wrong</h1>;

  if (isLoading) return <Loading />;

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Navbar />
      <StyledHeader>Manage admins</StyledHeader>
      <DataContainer>
        <OuterExercisesContainer>
          <InnerExercisesContainer>
            {data.members.length > 0 ? (
              data.members.map((member) => {
                return (
                  <div>
                    <input
                      type={"checkbox"}
                      id={member.userID}
                      name={"userID"}
                      value={(member.userID, member.userName)}
                      style={{
                        margin: "1rem",
                        height: "20px",
                        width: "20px",
                        marginRight: "0rem",
                      }}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedMembers([
                            ...selectedMembers,
                            {
                              userName: member.userName,
                              userID: member.userID,
                            },
                          ]);
                        } else {
                          setSelectedMembers(
                            selectedMembers.filter(
                              (user) => user.userID !== member.userID
                            )
                          );
                        }
                      }}
                    />
                    <GroupName htmlFor={member.userID}>
                      {member.userName}
                    </GroupName>
                  </div>
                );
              })
            ) : (
              <h1>No members in this group</h1>
            )}
          </InnerExercisesContainer>
        </OuterExercisesContainer>
        <AdminFunctionsContainer>
          <AdminFunction>
            <AdminButton
              disabled={!(selectedMembers.length > 0)}
              onClick={() => handleCreateAdmin(selectedMembers)}
            >
              Create admin
            </AdminButton>
          </AdminFunction>
          <AdminFunction>
            <AdminButton
              disabled={!(selectedMembers.length > 0)}
              onClick={() => handleRemoveMember(selectedMembers)}
            >
              Remove member
            </AdminButton>
          </AdminFunction>
          <AdminFunction>
            <AdminButton onClick={() => goBackToGroup}>
              Back to Cardio Group
            </AdminButton>
          </AdminFunction>
        </AdminFunctionsContainer>
      </DataContainer>
      <Triangle
        style={{ height: "20px", bottom: "0", position: "absolute" }}
      ></Triangle>
    </div>
  );
};

export default AdminPage;
