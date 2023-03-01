import styled from "styled-components";

export const Frame = styled.div`
  background-color: #f9dac3;
  height: 500px;
  width: 650px;
  margin-left: 30px;
  text-align: center;
  overflow: hidden;
  overflow-y: scroll;
  float: left;
  display: flex;
  flex-direction: column;
  border-width: 2px;
  border-style: solid;
  border-color: black;
`;

export const Title = styled.h1`
  color: #f16a00;
  font-size: 4em;
  text-align: center;
  margin: 0;
`;

export const Title2 = styled.h1`
  color: #f16a00;
  font-size: 3em;
  text-align: center;
  opacity: 1;
  margin: 0;
`;

export const Button = styled.div`
  cursor: pointer;
  width: 10px;
  height: 100px;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 30px;
  flex: 1 1 20%;
`;
export const Image = styled.img`
  width: 6rem;
`;

export const WorkoutsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
