import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  align-items: center;
  width: 100%;
`;

const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BalanceText = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const AddButton = styled.button`
  background: #0d1d2c;
  color: white;
  border: none;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  font-size: 24px;
  cursor: pointer;
`;

const ExpenseRow = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`;

const ExpenseBox = styled.div`
  background: ${(props) => (props.$isIncome ? "#e6f8ef" : "#ffecec")};
  color: ${(props) => (props.$isIncome ? "#0a8857" : "#d63c3c")};
  flex: 1;
  padding: 16px;
  border-radius: 12px;
  text-align: center;
  font-weight: 500;
  span {
    display: block;
    font-size: 18px;
    font-weight: bold;
  }
`;

const AddTransactionContainer = styled.div`
  margin-top: 16px;
  width: 100%;
  display: ${(props) => (props.visible ? "flex" : "none")};
  flex-direction: column;
  gap: 12px;
`;

const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const AddTransactionView = ({ addTransaction, visible }) => {
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("EXPENSE");

  return (
    <AddTransactionContainer visible={visible}>
      <Input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Input
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <div>
        <label>
          <input
            type="radio"
            value="EXPENSE"
            checked={type === "EXPENSE"}
            onChange={(e) => setType(e.target.value)}
          />{" "}
          Expense
        </label>
        <label style={{ marginLeft: 12 }}>
          <input
            type="radio"
            value="INCOME"
            checked={type === "INCOME"}
            onChange={(e) => setType(e.target.value)}
          />{" "}
          Income
        </label>
      </div>
      <button
        style={{
          background: "#0d1d2c",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          padding: "10px 12px",
          cursor: "pointer",
        }}
        onClick={() =>
          addTransaction({
            id: Date.now(),
            amount: Number(amount),
            desc,
            type,
          })
        }
      >
        Add Transaction
      </button>
    </AddTransactionContainer>
  );
};

const OverViewComponent = (props) => {
  const [showAdd, setShowAdd] = useState(false);

  return (
    <Container>
      <Card>
        <BalanceText>Balance: ${props.income - props.expense}</BalanceText>
        <AddButton onClick={() => setShowAdd(!showAdd)}>
          {showAdd ? "−" : "+"}
        </AddButton>
      </Card>
      <AddTransactionView
        visible={showAdd}
        addTransaction={(payload) => {
          props.addTransaction(payload);
          setShowAdd(false);
        }}
      />
      <ExpenseRow>
        <ExpenseBox>
          Expense<span>${props.expense}</span>
        </ExpenseBox>
        <ExpenseBox $isIncome>
          Income<span>${props.income}</span>
        </ExpenseBox>
      </ExpenseRow>
    </Container>
  );
};
export default OverViewComponent;
