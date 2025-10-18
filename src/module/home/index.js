import styled from "styled-components";
import TransactionsComponent from "./TransactionsComponent";
import { useEffect, useState } from "react";
import OverViewComponent from "./OverviewComponent";

const Container = styled.div`
  background-color: #fff;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-size: 16px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const HomeComponent = () => {
  const [transactions, updateTransaction] = useState([]);
  const [expense, updateExpense] = useState(0);
  const [income, updateIncome] = useState(0);

  const calculateBalance = () => {
    let exp = 0,
      inc = 0;
    transactions.forEach((t) =>
      t.type === "EXPENSE" ? (exp += t.amount) : (inc += t.amount)
    );
    updateExpense(exp);
    updateIncome(inc);
  };

  useEffect(() => calculateBalance(), [transactions]);

  const addTransaction = (payload) => {
    updateTransaction((prev) => [...prev, payload]);
  };

  return (
    <Container>
      <OverViewComponent
        expense={expense}
        income={income}
        addTransaction={addTransaction}
      />
      {transactions.length > 0 && (
        <TransactionsComponent transactions={transactions} />
      )}
    </Container>
  );
};
export default HomeComponent;
