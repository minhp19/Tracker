import React, { useState } from "react";
import AddTransactionView from "./AddTransactionView";

const OverViewComponent = ({ expense, income, addTransaction }) => {
  const [showAdd, setShowAdd] = useState(false);

  return (
    <div className="flex flex-col items-center w-full mb-4">
      <div className="bg-white shadow-md rounded-xl p-4 w-full flex justify-between items-center">
        <div className="text-lg font-semibold">
          Balance: ${income - expense}
        </div>
        <button
          onClick={() => setShowAdd(!showAdd)}
          className="bg-[#0d1d2c] text-white rounded-full w-10 h-10 text-xl flex items-center justify-center"
        >
          {showAdd ? "−" : "+"}
        </button>
      </div>

      <AddTransactionView visible={showAdd} addTransaction={addTransaction} />

      <div className="flex gap-4 mt-4 w-full">
        <div className="flex-1 bg-[#ffecec] text-[#d63c3c] rounded-xl p-4 text-center font-medium">
          Expense
          <span className="block text-lg font-bold">${expense}</span>
        </div>
        <div className="flex-1 bg-[#e6f8ef] text-[#0a8857] rounded-xl p-4 text-center font-medium">
          Income
          <span className="block text-lg font-bold">${income}</span>
        </div>
      </div>
    </div>
  );
};

export default OverViewComponent;
