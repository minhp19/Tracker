import React from "react";
import styled from "styled-components";
import HomeComponent from "./module/home";

const AppContainer = styled.div`
  background-color: #f7f8fa;
  color: #1b1b1d;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "Poppins", sans-serif;
`;

const AppWrapper = styled.div`
  background: white;
  width: 380px;
  height: 90vh;
  border-radius: 24px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Header = styled.div`
  background: #0d1d2c;
  color: white;
  padding: 24px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  border-radius: 24px 24px 0 0;
`;

const App = () => {
  return (
    <AppContainer>
      <AppWrapper>
        <Header>Daily Expense Tracker</Header>
        <HomeComponent />
      </AppWrapper>
    </AppContainer>
  );
};

export default App;
