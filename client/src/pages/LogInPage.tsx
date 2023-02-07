import React from "react";
import styled from "styled-components";
import stavaLogo from "../assets/stava_logo.svg";

const Logo = styled.img`
  width: 4rem;
`;

const LogIn: React.FC = () => {
  return (
    <>
      <h1>TEST</h1>
      <Logo src={stavaLogo} />
    </>
  );
};
export default LogIn;
