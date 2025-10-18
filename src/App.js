import React from "react";
import HomeComponent from "./pages/home/HomeComponent";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white w-[380px] rounded-2xl shadow-lg flex flex-col overflow-hidden  max-h-[90vh]">
        <header className="bg-[#0d1d2c] text-white py-6 text-center text-lg font-semibold">
          Daily Expense Tracker
        </header>
        <HomeComponent />
      </div>
    </div>
  );
}

export default App;
