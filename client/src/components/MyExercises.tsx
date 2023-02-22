import React from "react";
import styled from "styled-components";
import dumbell from "../assets/dumbell.svg";
import maskin from "../assets/maskin.svg";
import medisinball from "../assets/medisinball.svg";
import running from "../assets/running.svg";
import yoga from "../assets/yoga.svg";
import stretching from "../assets/stretching.svg";
import pulldown from "../assets/pulldown.svg";
import situps from "../assets/situps.svg";
import hangups from "../assets/hangups.svg";
import jumping from "../assets/jumping.svg";
import bench from "../assets/bench.svg";
import cycle from "../assets/cycle.svg";

const Frame = styled.div`
  background-color: #f9dac3;
  height: 500px;
  width: 650px;
  margin-left: 30px;
  text-align: center;
  overflow: hidden;
  overflow-y: scroll;
  grid-template-columns: 150px 150px 250px;
  border-width: 2px;
  border-style: solid;
  border-color: black;
`;

const Title = styled.h1`
  color: #f16a00;
  font-size: 4em;
  text-align: center;
  margin: 0;
`;

const Title2 = styled.h1`
  color: #f16a00;
  font-size: 3em;
  text-align: center;
  opacity: 1;
  margin: 0;
`;

const Button = styled.div`
  cursor: pointer;
  width: 10px;
  height: 190px;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 40px;
`;
const Image = styled.img`
  width: 8rem;
`;
const Column = styled.div`
  float: left;
  width: 33%;
`;

const Excercisces: React.FC = () => {
  return (
    <>
      <Title>Create workout</Title>
      <Frame>
        <Title2>My excercices</Title2>
        <Column>
          <Button>
            <Image src={maskin} />
          </Button>
          <Button>
            <Image src={dumbell} />
          </Button>
          <Button>
            <Image src={running} />
          </Button>
          <Button>
            <Image src={medisinball} />
          </Button>
        </Column>
        <Column>
          <Button>
            <Image src={stretching} />
          </Button>
          <Button>
            <Image src={cycle} />
          </Button>
          <Button>
            <Image src={situps} />
          </Button>
          <Button>
            <Image src={hangups} />
          </Button>
        </Column>
        <Column>
          <Button>
            <Image src={yoga} />
          </Button>
          <Button>
            <Image src={bench} />
          </Button>
          <Button>
            <Image src={pulldown} />
          </Button>
          <Button>
            <Image src={jumping} />
          </Button>
        </Column>
      </Frame>
    </>
  );
};

export default Excercisces;
