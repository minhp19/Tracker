import React from "react";

const TransactionsComponent = ({ transactions, deleteTransaction }) => {
  return (
    <div className="flex flex-col gap-3 mt-5">
      {transactions.map((t) => (
        <div
          key={t.id}
          className={`bg-white p-4 rounded-xl shadow-sm flex justify-between items-center border-l-4 ${
            t.type === "EXPENSE" ? "border-[#ff6b6b]" : "border-[#51cf66]"
          }`}
        >
          <span>{t.desc}</span>
          <div className="flex items-center gap-3">
            <span>${t.amount}</span>
            <button
              onClick={() => deleteTransaction(t.id)}
              className="text-red-500 font-bold"
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionsComponent;
