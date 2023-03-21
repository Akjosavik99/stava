import React from "react";
import styled from "styled-components";

const AdsContainer = styled.div`
  display: flex;
  width: 20%;
  padding: 1em;
  text-align: center;
  justify-content: space-around;
`;

const AdsImg = styled.div`
  width: 100%;
  background-color: #ff4d4d;
`;

const AdText = styled.h1`
  color: white;
  font-size: 5em;
`;

const TextContainter = styled.div`
  display: flex;
  height: 20%;
  text-align: center;
  justify-content: space-around;
`;

const Ad: React.FC = () => {
  const a = 1;
  return (
    <>
      <AdsContainer>
        <AdsImg>
          <TextContainter style={{ maxHeight: "15%" }}></TextContainter>
          <TextContainter>
            <AdText>AD</AdText>
          </TextContainter>
          <TextContainter>
            <AdText>AD</AdText>
          </TextContainter>
          <TextContainter>
            <AdText>AD</AdText>
          </TextContainter>
          <TextContainter>
            <AdText>AD</AdText>
          </TextContainter>
        </AdsImg>
      </AdsContainer>
    </>
  );
};

export default Ad;
