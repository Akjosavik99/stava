import styled from "styled-components";

export const OuterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;
export const Heading = styled.h1`
  justify-content: center;
  display: flex;
  width: 60%;
`;

export const InnerContainer = styled.form`
  height: 600px;
  display: flex;
  background-color: #fcdec7;
  width: 60%;
  flex-wrap: wrap;
  border: 2px solid black;
`;

export const ProgressContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 1em;
  overflow-y: auto;
  max-height: 400px;
`;
export const InputContainer = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: center;
  padding: 1em;
`;
export const ProgressUnit = styled.p`
  display: flex;
  min-width: 100%;
  color: #f16a00;
  margin: 0;
  font-size: 1.2em;
`;
export const InputFieldContainer = styled.textarea`
  min-width: 80%;
  overflow: auto;
  border-radius: 1rem;
  border: none;
  resize: none;
`;

export const SubmitButton = styled.button`
  display: flex;
  background-color: #f16a00;
  color: white;
  border-radius: 5rem;
  border: none;
  height: 2.5rem;
  width: 8rem;
  font-size: 1.5rem;
  font-weight: bold;
  justify-content: center;
  margin: 1em;
`;
