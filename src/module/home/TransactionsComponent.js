import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const Search = styled.input`
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid #ddd;
  outline: none;
`;

const TransactionCard = styled.div`
  background: white;
  padding: 14px 16px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  border-left: 4px solid ${(p) => (p.$isExpense ? "#ff6b6b" : "#51cf66")};
`;

const TransactionsComponent = ({ transactions }) => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(transactions);

  const filterData = useCallback(() => {
    setFiltered(
      transactions.filter((t) =>
        t.desc.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [transactions, search]);

  useEffect(() => filterData(), [filterData]);

  return (
    <Container>
      <Search
        placeholder="Search transactions"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filtered.map((t) => (
        <TransactionCard key={t.id} $isExpense={t.type === "EXPENSE"}>
          <span>{t.desc}</span>
          <span>${t.amount}</span>
        </TransactionCard>
      ))}
    </Container>
  );
};
export default TransactionsComponent;
