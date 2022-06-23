import React from "react";
import styled from "styled-components";
import Login from "./Login";
import User from "./user";

const Welcome = ({ authState }) => {
  return (
    <WelcomeSection>
      <WelcomeBox>Welcome To V7 - Task</WelcomeBox>
      {authState.isAuthenticated ? <User {...authState} /> : <Login />}
    </WelcomeSection>
  );
};

export default Welcome;

//Styles with styled components
const WelcomeSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const WelcomeBox = styled.div`
  min-width: 300px;
  text-align: center;
  margin-bottom: 2em;
`;
