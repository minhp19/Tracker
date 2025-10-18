import styled from "styled-components";
import OverviewComponent from "./OverviewComponent";
import TransactionsComponent from "./TransactionsComponent";

const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  align-items: center;
  height: 100vh;
  width: 98%;
  padding-top: 30px;
  font-family: Montserrat;
`;

const HomeComponent = (props) => {
  return (
    <Container>
      <OverviewComponent />
      <TransactionsComponent />
    </Container>
  );
};

export default HomeComponent;
