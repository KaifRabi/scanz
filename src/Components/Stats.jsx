import React from "react";

function Stats() {
  return (
    <div className="container bg-white mx-auto -mt-5 flex flex-col md:flex-row justify-around items-center text-center gap-10 md:gap-0 py-8 rounded-lg shadow-xl md:w-[80%]">
      <div>
        <h1 className="text-blue-500 text-4xl font-bold">65,665</h1>
        <div>Traders Helped</div>
      </div>
      <div>
        <h1 className="text-blue-500 text-4xl font-bold">749,939</h1>
        <div>Trades Made By User</div>
      </div>
      <div>
        <h1 className="text-blue-500 text-4xl font-bold">$3.1 Billion</h1>
        <div>Trades by Users</div>
      </div>
    </div>
  );
}

export default Stats;
