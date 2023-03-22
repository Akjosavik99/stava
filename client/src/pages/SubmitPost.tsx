import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { SubmitButton } from "../styles/Form";
import {
  sendPost,
  useFetchWorkoutPlansQuery,
  useGetGroupsQuery,
} from "../utils/api";
import { GroupData } from "../types/groupTypes";
import Loading from "../components/Loading";
import { WorkoutPlan } from "../types/workoutExerciseTypes";

const SuperWrapper = styled.div`
  padding: 20px;
  margin: auto;
  margin-top: 50px;
  max-width: 600px;
`;
const SubmitPostWrapper = styled.div`
  background-color: #f9dac3;
  margin: auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: #f16a00;
  font-size: 4em;
  text-align: center;
  margin: 0;
`;

const SubmitPostButton = styled.button`
  border-radius: 5rem;
  background-color: green;
  color: white;
  height: 4rem;
  width: 10rem;
  margin: 0 auto;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border-color: black;

  &:disabled {
    cursor: default;
    background-color: #958686;
  }
`;

const SubmitPost: React.FC = () => {
  const [selectedGroupID, setSelectedGroupID] = useState<string>("");
  const [selectedWorkoutPlanID, setSelectedWorkoutPlanID] =
    useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  const groupData = useGetGroupsQuery();

  const workoutPlanData = useFetchWorkoutPlansQuery();

  if (groupData.isLoading || workoutPlanData.isLoading) {
    return <Loading />;
  }

  if (groupData.isError || workoutPlanData.isError) {
    return <div>Something went wrong</div>;
  }

  const handleSubmitPost = () => {
    const post = {
      title: title,
      text: text,
      workoutPlanID: selectedWorkoutPlanID,
      groupID: selectedGroupID,
      picture: "",
    };
    sendPost(post)
      .then((res) => window.location.reload())
      .catch((err) => {
        console.log(err);
      });
  };

  const showGroups = () => {
    if (groupData.data.length > 0) {
      return groupData.data.map((group: GroupData) => {
        return (
          <div>
            <button
              className={
                selectedGroupID == group._id ? "btn btn-light" : "btn btn-grey"
              }
              onClick={(e) => setSelectedGroupID(group._id)}
            >
              {group.groupName}
            </button>
          </div>
        );
      });
    } else {
      return <div>No groups...</div>;
    }
  };

  const showWorkouts = () => {
    if (workoutPlanData.data.length > 0) {
      return workoutPlanData.data.map((workoutPlan: WorkoutPlan) => {
        return (
          <div>
            <button
              className={
                selectedWorkoutPlanID == workoutPlan._id
                  ? "btn btn-light"
                  : "btn btn-grey"
              }
              onClick={(e) => setSelectedWorkoutPlanID(workoutPlan._id)}
            >
              {workoutPlan.workoutPlanName}
            </button>
          </div>
        );
      });
    } else {
      return <div>No workouts...</div>;
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <SuperWrapper>
          <Title>Create Post</Title>
          <SubmitPostWrapper>
            <div className="mb-3">
              <label htmlFor="postTitle" className="form-label fs-3">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="postTitle"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="postText" className="form-label fs-3">
                Text
              </label>
              <textarea
                className="form-control"
                id="postText"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label fs-3">
                Choose group
              </label>
              {showGroups()}
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label fs-3">
                Choose workout
              </label>
              {showWorkouts()}
            </div>
          </SubmitPostWrapper>
          <SubmitPostButton
            style={{
              marginTop: "10px",
            }}
            type="submit"
            onClick={() => {
              handleSubmitPost();
            }}
            disabled={
              title == "" ||
              text == "" ||
              selectedGroupID == "" ||
              selectedWorkoutPlanID == ""
            }
          >
            Submit Post
          </SubmitPostButton>
        </SuperWrapper>
      </div>
    </>
  );
};

export default SubmitPost;
