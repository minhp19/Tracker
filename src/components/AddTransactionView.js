import React, { useState } from "react";

const AddTransactionView = ({ addTransaction, visible }) => {
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("EXPENSE");

  if (!visible) return null;

  return (
    <div className="flex flex-col gap-3 w-full mt-4">
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="p-2 border border-gray-300 rounded-md"
      />
      <input
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="p-2 border border-gray-300 rounded-md"
      />
      <div className="flex gap-4 items-center">
        <label>
          <input
            type="radio"
            value="EXPENSE"
            checked={type === "EXPENSE"}
            onChange={(e) => setType(e.target.value)}
          />{" "}
          Expense
        </label>
        <label>
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
        className="bg-[#0d1d2c] text-white py-2 px-3 rounded-md font-semibold hover:bg-[#142d46]"
        onClick={() => {
          if (!amount || !desc) return;
          addTransaction({
            id: Date.now(),
            amount: Number(amount),
            desc,
            type,
          });
          setAmount("");
          setDesc("");
          setType("EXPENSE");
        }}
      >
        Add Transaction
      </button>
    </div>
  );
};

export default AddTransactionView;
