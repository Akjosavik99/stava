import React from "react";
import styled from "styled-components";
import stavaLogo from "../assets/stava_logo.svg";
import strongMan from "../assets/strong_man.svg";

const Bar = styled.nav`
  font-size: 1.5em;
  background-color: #f16a00;
  height: 100px;
`;

const Logo = styled.img`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 15px;
  width: 6rem;
  background-color: white;
`;

const Strongman = styled.img`
  width: 6rem;
  float: right;

  `;

const Navbar: React.FC = () => {
  return (
    <>
      <Bar>
        <Logo src={stavaLogo} />
        <Strongman src={strongMan} />
      </Bar>
    </>
  );
};
export default Navbar;
