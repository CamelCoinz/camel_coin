import React from "react";

export const FlipCoin = () => {
  return (
    <div className="FlipCoin">
      <div className="side-a bg-red-900  rounded-full m-5  animate-spin">
        <h2>TAIL</h2>
      </div>
      <button id="btn">Coin Toss</button>
    </div>
  );
};
