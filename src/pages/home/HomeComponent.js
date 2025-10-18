import { useEffect, useState } from "react";
import OverViewComponent from "../../components/OverviewComponent";
import TransactionsComponent from "../../components/TransactionsComponent";

const HomeComponent = () => {
  const [transactions, setTransactions] = useState(() => {
    const stored = localStorage.getItem("transactions");
    return stored ? JSON.parse(stored) : [];
  });

  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  useEffect(() => {
    let exp = 0,
      inc = 0;
    transactions.forEach((t) =>
      t.type === "EXPENSE" ? (exp += t.amount) : (inc += t.amount)
    );
    setExpense(exp);
    setIncome(inc);

    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (payload) =>
    setTransactions((prev) => [...prev, payload]);
  const deleteTransaction = (id) =>
    setTransactions((prev) => prev.filter((t) => t.id !== id));

  return (
    <div className="flex flex-col w-full h-full p-4">
      <OverViewComponent
        expense={expense}
        income={income}
        addTransaction={addTransaction}
      />
      {transactions.length > 0 && (
        <TransactionsComponent
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />
      )}
    </div>
  );
};

export default HomeComponent;
