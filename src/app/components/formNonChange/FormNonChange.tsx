"use client";
import React, { useState } from "react";
import { nonChange } from "../../services/nonChange";

interface FormComponentProps {
  onSubCoins: (coins: number[], result: number) => void;
}

const FormNonChange: React.FC<FormComponentProps> = ({ onSubCoins }) => {
  const [coins, setCoins] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const coinsArray = coins.split(",").map(Number);
    const resultCoins = nonChange(coinsArray);
    onSubCoins(coinsArray, resultCoins);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Enter the numbers separated by commas:{" "}
          <input
          className="w-full text-[#FC6865]"
            type="text"
            value={coins}
            onChange={(e) => setCoins(e.target.value)}
          />
        </label>
      </div>    
      <button type="submit" className="my-2 border p-2 transition duration-300 ease-in-out hover:scale-110">Calculate</button>
    </form>
  );
};

export default FormNonChange;
