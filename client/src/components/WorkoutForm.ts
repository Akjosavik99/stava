import styled from "styled-components";

export const DataContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  padding: 2em;
`;
export const DoubleContainer = styled.div`
  margin: 0px;
  width: auto;
  display: flex;
  justify-content: center;
  min-width: 700px;
  border: 3px solid black;
`;
export const WeekdayContainer = styled.div`
  min-width: 600px;
  margin: 0px;
  display: flex;
  flex-direction: column;
`;
export const DayContainer = styled.h1`
  padding: 0.3em;
  font-size: 1.8em;
  background-color: #ffc08e;
  margin: 0;
  min-height: 1.8em;
`;

export const DayContainerList = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: black;
  &:hover {
    color: #f16a00;
  }
`;
