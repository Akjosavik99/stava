import styled from "styled-components";

export const Logo = styled.img`
  width: 10rem;
  margin: 0 auto;
  padding-bottom: 0.3rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 0;
`;

export const Triangle = styled.div`
  z-index: 100;
  width: 100%;
  height: 30%;
  background-color: #f16a00;
  min-height: 100px;
  clip-path: polygon(0% 101%, 50% 0%, 100% 101%);
`;

export const SignupContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
`;

export const ContentContainer = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: auto;
`;

export const InputField = styled.input<{ isError: boolean }>`
  background-color: ${({ isError }) => (isError ? "#f74040" : "white")};
  border-radius: 1rem;
  height: 2.25rem;
  width: 14rem;
  margin: 0 auto;
  padding: 0rem 1rem;
  border-color: ${({ isError }) => (isError ? "red" : "black")};
`;

export const InputFieldLogInPage = styled.input`
  border-color: black;
  border-radius: 1rem;
  height: 2.25rem;
  width: 14rem;
  margin: 0 auto;
  padding: 0rem 1rem;
`;

export const FormContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: #f16a00;
  text-align: center;
  padding-top: 2rem;
`;

export const CreateUserContainer = styled.div`
  display: flex;
  height: 20%;
  flex-direction: column;
  justify-content: space-center;
`;

export const CreateUserButton = styled.button`
  border-color: black;
  border-radius: 5rem;
  background-color: white;
  height: 2rem;
  width: 8rem;
  margin: auto;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`;

export const LogInButton = styled.button`
  border-color: black;
  border-radius: 5rem;
  background-color: white;
  height: 3rem;
  width: 10rem;
  margin: 0 auto;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const InputContainer = styled.div`
  margin: 0 0 0rem 0;
  height: 4.2rem;
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

export const BackButton = styled.div`
  margin: auto auto auto 2rem;
  align-self: flex-end;
`;

export const Arrow = styled.img`
  height: 3rem;
  width: 3rem;
  cursor: pointer;
  cursor: pointer;
`;

export const ErrorText = styled.p`
  margin: 0;
  padding: 0;
`;

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

export const OuterExercisesContainer = styled.div`
  margin: 0px;
  padding: 0.1em;
  max-height: 600px;
  min-width: 650px;
  width: 60%;
  background-color: #ffc08e;
  border: 3px solid black;
  overflow-y: scroll;
`;

export const InnerExercisesContainer = styled.div`
  min-width: 650px;
  margin: 0px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

// The container with the exercises + reps/sets
export const ExerciseContainer = styled.div`
  max-width: 50%;
  flex: 50%;
  display: flex;
  padding: 0.5em;
  justify-content: center;
`;

export const ExerciseImage = styled.img`
  width: 5em;
  height: 5em;
  margin: 0.5em;
`;

export const RepsSetsContainer = styled.div`
  margin: 0.5em;
  padding: 0 0.5em;
  font-size: 1.2em;
  background-color: none;
`;
export const RepsSets = styled.p`
  border: 1px solid black;
  margin: 0.2em;
  padding: 0 0.5em;
  font-size: 1.35em;
  font-weight: bold;
  text-align: center;
  background-color: white;
  border-radius: 4em;
  min-width: 6em;
  max-height: 1.5em;
`;
