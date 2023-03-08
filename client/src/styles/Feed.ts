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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid black;
  background-color: rgba(241, 106, 0, 0.22);
  margin: 1rem auto;
`;
