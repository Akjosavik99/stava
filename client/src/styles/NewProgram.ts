import styled from "styled-components";

export const Frame = styled.div`
  background-color: #f9dac3;
  height: 50vh;
  width: 40vw;
  margin-left: 30px;
  text-align: center;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;
export const Frame2 = styled.div`
  background-color: #f9dac3;
  height: 50vh;
  width: 100%;
  margin-right: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
export const Frame3 = styled.div`
  height: 80%;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
`;

export const Frame4 = styled.div`
  height: auto;
  width: 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
export const SubmitFrame = styled.div`
  height: 20%;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
`;

export const FrameHolder = styled.section`
  height: auto;
  width: auto;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h1`
  color: #f16a00;
  font-size: 4em;
  text-align: center;
  margin: 0;
`;
export const Page = styled.main`
  height: 92vh;
  overflow-y: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ProgramItem = styled.div`
  margin: 20px;
  border-bottom: black;
  border-bottom: 2px solid #f16a00;
  cursor: pointer;
`;
export const Title2 = styled.h1`
  color: #f16a00;
  font-size: 3em;
  text-align: left;
  opacity: 1;
  margin: 0;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  border-radius: 5rem;
  background-color: white;
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

export const InputField = styled.input`
  border-color: black;
  border-radius: 1rem;
  height: 2.25rem;
  width: 50%;
  margin: 0 auto;
  padding: 0rem 1rem;
`;
export const LabelField = styled.label`
  border-color: black;
  border-radius: 1rem;
  height: 2.25rem;
  width: 50%;
  margin: 0 auto;
  padding: 0rem 1rem;
`;

export const WeekLabel = styled.label`
  display: flex;
  flex-direction: column;
`;
export const LabelHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 100px;
  align-items: center;
`;
export const WeekInput = styled.input`
  border: none;
  height: 30px;
  width: 30px;
  cursor: pointer;
`;
export const WeekdayHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100px;
  align-items: center;
`;

export const Subtitle = styled.h2`
  color: #f16a00;
  font-size: 3em;
  text-align: center;
  margin: 20px 0 20px 0;
`;
export const WorkoutPlanDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: auto;
  align-items: center;
  overflow: scroll;
`;
export const WorkoutNameHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: auto;
  align-items: center;
  width: 75px;
`;
export const WorkoutNameHolder2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: auto;
  align-items: flex-end;
  height: 100%;
`;
export const WeekdayHeader = styled.h3`
  margin: 0;
`;
export const WeekDiv = styled.div`
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  display: flex;
  margin: 10px 0 10px 0;
  padding-left: 10px;
`;
export const WorkoutName = styled.div`
  margin-right: 10px;
`;
