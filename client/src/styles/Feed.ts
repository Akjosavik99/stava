import styled from "styled-components";

export const StyledHeader = styled.h1`
  font-size: 2rem;
  text-decoration: underline;
`;

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  margin: 0 auto;
  padding: 2rem;
`;

export const FeedPost = styled.div`
  /* display: flex; */
  display: grid;
  grid-template-areas: "username title group" "workoutname workoutname workoutname" "text text text";
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid black;
  background-color: rgba(241, 106, 0, 0.22);
  margin: 1rem auto;
  position: relative; 
  border-radius: 20px;
  }
`;

export const Button = styled.button`
  width: 180px;
  height: 40px;
  background: #f16a00;
  border-radius: 20px;
  color: white;
  font-size: 18px;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
`;
