import { QueryClient, useQueryClient } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { Triangle } from "../styles/Form";
import {
  getUsername,
  useGetGroupPostsQuery,
  useGetGroupQuery,
  useUpdateGroupMutation,
  removeFromGroup,
  useFetchUser,
} from "../utils/api";
import { admin } from "../utils/auth";

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

  &:disabled {
    background-color: #958686;
  }
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

const ViewGroup: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const groupId = searchParams.get("groupid");

  const user = useFetchUser();

  const { data, isLoading } = useGetGroupPostsQuery(groupId || "");
  const { data: groupData } = useGetGroupQuery(groupId || "");
  const { mutate: leaveGroup } = useUpdateGroupMutation(groupId || "");
  const { valid } = admin(groupId || "");

  const removeUser = (e: React.MouseEvent) => {
    e.preventDefault();
    if (groupId && user.data) {
      removeFromGroup(groupId, user.data._id)
        .then((res) => {
          console.log(res.data);
          navigate("/groups");
        })
        .catch((err) => console.log(err));
    }
  };

  const handleLeaveGroup = () => {
    const username = getUsername();
    const index = groupData?.members.findIndex(
      async (tempUser) => tempUser.userName === (await username)
    );
    if (index! > -1) {
      groupData?.members.splice(index!, 1);
    }
    leaveGroup(groupData!);
    queryClient.invalidateQueries(["groups"]);
    navigate("/groups");
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Navbar />
      <StyledHeader>Your group</StyledHeader>
      <DataContainer>
        <OuterExercisesContainer>
          <InnerExercisesContainer>
            {data != undefined && data?.length > 0 ? (
              data?.map((post) => {
                return (
                  <div>
                    <h2>{post.title}</h2>
                  </div>
                );
              })
            ) : (
              <h2>No posts yet</h2>
            )}
          </InnerExercisesContainer>
        </OuterExercisesContainer>
        <AdminFunctionsContainer>
          {valid && (
            <AdminFunction>
              <AdminButton
                onClick={() => navigate(`/admin?groupid=${groupId}`)}
              >
                Go to admin page
              </AdminButton>
            </AdminFunction>
          )}
          <AdminFunction>
            <AdminButton
              onClick={(e) => removeUser(e)}
              style={{ backgroundColor: "#da0000" }}
            >
              Leave group
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

export default ViewGroup;
