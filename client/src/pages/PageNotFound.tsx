import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-size: 5rem;
`;

const PageNotFound: React.FC = () => {
  return <StyledDiv>Page not found :(</StyledDiv>;
};

export default PageNotFound;
