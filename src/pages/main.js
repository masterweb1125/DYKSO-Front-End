import React from 'react';
import styled from 'styled-components';
import capture from '../assets/capture.png';

const Main = () => {

    return (
      <Container>
        <SubContainer>
          <MainContainer href="/buy">
            <span>I am here to</span>
            <span>buy / search for something</span>
          </MainContainer>
          <MainContainer href="/sell">
            <span>I am here to</span>
            <span>sell / request / post something</span>
          </MainContainer>
        </SubContainer>
        <SubContainer>
          <MainContainer href="/list">
            <span>Not ready for anything just yet?</span>
            <span>Click here to see what others are</span>
            <span>selling or requesting opr have</span>
            <span>posted in your area</span>
          </MainContainer>
          <MainContainer href="/capture">
            <img src={capture} alt='logo'/>
            <span>Capture and post</span>
          </MainContainer>
        </SubContainer>
      </Container>
    );
  };

  const Container = styled.div`
  background: #EEEEEE;
  width: 90%;
  height: 90vh;
  padding:  1% 1% 1% 1%;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const SubContainer = styled.div`
  width: 90%;
  height: 40vh;
  padding:  1% 1% 1% 1%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  justify-content: space-between;
`;

const MainContainer = styled.a`
  width: 48%;
  height: 40vh;
  font-size: 30px;
  background: #FFFFFF;
  border-radius: 8px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  justify-content: center;
  white-space: pre-line;

  &:hover {
    background-color: #EEFFEE;
    border-radius: 6px;
    cursor: pointer;
  }

  span {
    color: #000000;
    font-weight: bold;
  }

`;
  
  export default Main;