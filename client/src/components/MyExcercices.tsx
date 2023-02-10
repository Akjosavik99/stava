import React from "react";
import styled from "styled-components";

const Frame = styled.div`
  background-color: #F9DAC3;
  height: 500px;
  width: 650px;
  margin-left: 30px;
  margin-top: 15px;
  text-align: center;
`;

const Title = styled.h1`
  color: #F16A00;
  font-size: 3em;
  text-align: center;
  opacity: 1;
`;

const Title2 = styled.h1`
  color: #F16A00;
  font-size: 2em;
  text-align: center;
  opacity: 1;
`;

const column = styled.div`
    float: left;
    width: 50%;
    padding: 10px;
  `;

  var elements = document.getElementsByClassName("column");



const Excercisces: React.FC = () => {
  return (
    <>
      <Title>Create workout</Title>
      <Frame>
        <Title2>My excercices</Title2>
      </Frame>
    </>
  );
};

export default Excercisces;
