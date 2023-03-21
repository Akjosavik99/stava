import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
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
import { Log } from "../types/userType";
import { fetchUser, log } from "../utils/api";

const ViewProgress: React.FC = () => {
  const [user, setUser] = useState(undefined as any);
  const [text, setText] = useState("");

  useEffect(() => {
    fetchUser()
      .then((res) => {
        res.data.data ? setUser(res.data.data) : setUser(undefined);
      })
      .catch((e) => {
        setUser(undefined);
        console.log(e);
      });
  }, []);

  const formatDate = (numberdate: number) => {
    const date = new Date(numberdate);
    return (
      <>
        {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
      </>
    );
  };

  const submitLog = (e: React.FormEvent) => {
    e.preventDefault();
    log({ date: Date.now().toString(), text: text }).then((res) => {
      res ? window.location.reload() : null;
    });
  };

  return (
    <>
      <Navbar />
      <OuterContainer>
        {user !== undefined ? (
          <>
            <Heading>Your Progress</Heading>
            <InnerContainer
              onSubmit={(e) => {
                submitLog(e);
              }}
            >
              <ProgressContainer>
                {user.log.map((log: Log) => {
                  return (
                    <ProgressUnit>
                      {formatDate(Date.parse(log.date))} - {log.text}
                    </ProgressUnit>
                  );
                })}
              </ProgressContainer>
              <InputContainer>
                <InputFieldContainer
                  onChange={(e) => setText(e.target.value)}
                ></InputFieldContainer>
                <SubmitButton type="submit">Submit</SubmitButton>
              </InputContainer>
            </InnerContainer>
          </>
        ) : (
          <Loading />
        )}
      </OuterContainer>
    </>
  );
};

export default ViewProgress;
