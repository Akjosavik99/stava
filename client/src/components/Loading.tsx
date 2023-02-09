import React from "react";
import styled from "styled-components";
import { RotatingLines } from "react-loader-spinner";

const LoaderContainer = styled.div`
  padding-top: 25vh;
  display: flex;
  justify-content: center;
  height: 40vh;
`;

const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <RotatingLines strokeColor="#f16a00" strokeWidth="5" />
    </LoaderContainer>
  );
};

export default Loader;
