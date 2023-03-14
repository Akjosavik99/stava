import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Form } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  Heading,
  InnerContainer,
  InputContainer,
  InputFieldContainer,
  OuterContainer,
  ProgressContainer,
  ProgressUnit,
  SubmitButton,
} from "../styles/ProgressView";
import { User } from "../types/userType";

const ViewProgress: React.FC = () => {
  const useGetDataQuery = (id: string) => {
    return useQuery<User>([id], async () => {
      return await axios
        .get(`http://localhost:3001/api/user/log`)
        .then((res) => {
          return res.data.data;
        });
    });
  };

  const { data, isLoading, error } = useGetDataQuery("id");

  return (
    <>
      <Navbar />
      <OuterContainer>
        <Heading>Your Progress</Heading>
        <InnerContainer
          onSubmit={() => {
            console.log("submit");
          }}
        >
          <ProgressContainer>
            <ProgressUnit>
              01.01.2023 - Today I lifted 90 kg max rep in bench, ran 3km on a
              treadmill and also set a new record in deadlift with 150 kg.
            </ProgressUnit>
            <ProgressUnit>
              02.01.2023 - Ran 8km in one hour on treadmill
            </ProgressUnit>
            <ProgressUnit>
              04.01.2023 - Today I lifted 160 kg max rep in deadlift
            </ProgressUnit>
          </ProgressContainer>
          <InputContainer>
            <InputFieldContainer></InputFieldContainer>
            <SubmitButton type="submit">Submit</SubmitButton>
          </InputContainer>
        </InnerContainer>
      </OuterContainer>
    </>
  );
};

export default ViewProgress;
