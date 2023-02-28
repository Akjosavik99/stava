import styled from "styled-components";

export const Frame = styled.div`
  background-color: #f9dac3;
  height: 500px;
  width: 700px;
  text-align: center;
  border-width: 2px;
  border-style: solid;
  border-color: black;
  margin-right: 30px;
  float: right;
`;

export const Column = styled.div`
  float: left;
  width: 100%;
`;

export const row = styled.div`
  float: left;
  width: 50%;
`;

export const Title = styled.h1`
  color: #f16a00;
  font-size: 3em;
  text-align: center;
  margin: 0;
`;

export const Title2 = styled.h1`
  color: #f16a00;
  font-size: 2em;
  margin: 0;
`;

export const Frame2 = styled.div`
  background-color: #ffc08e;
  height: 350px;
  width: 600px;
  border-style: solid;
  border-color: black;
  margin-left: 30px;
  margin-top: 10px;
  overflow: hidden;
  overflow-y: scroll;
`;
export const SaveButton = styled.button`
  border-radius: 5rem;
  background-color: #f16a00;
  height: 4rem;
  width: 10rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  margin-right: 30px;
  margin-bottom: 15px;
`;

export const DayButton = styled.div`
  cursor: pointer;
  width: 250px;
  height: 33px;
  color: #f16a00;
  text-align: center;
  font-size: 1.2em;
  margin-left: 30px;
  margin-top: 10px;
  font-weight: bold;
  background-color: white;
  border-radius: 1rem;
`;

export const InputField = styled.input`
  background-color: white;
  border-radius: 2rem;
  height: 2rem;
  width: 6rem;
  margin: 0;
`;
