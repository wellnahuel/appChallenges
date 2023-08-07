"use client";
import React, { useState } from "react";
import { findPairWithSum } from "../../services/findPairWithSum";

interface FormComponentProps {
  onSubSum: (numbers: number[], targetSum: number, result: number[]) => void;
}

const FormTwoNumber: React.FC<FormComponentProps> = ({ onSubSum }) => {
  const [numbers, setNumbers] = useState<string>("");
  const [targetSum, setTargetSum] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const numbersArray = numbers.split(",").map(Number);
    const target = Number(targetSum);
    const result = findPairWithSum(numbersArray, target);
    onSubSum(numbersArray, target, result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Enter the numbers separated by commas:
          <input
            className="w-full text-[#FC6865]"
            type="text"
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Enter the targetSum number:
          <input
            className="w-full text-[#FC6865]"
            type="text"
            value={targetSum}
            onChange={(e) => setTargetSum(e.target.value)}
          />
        </label>
      </div>
      <button
        type="submit"
        className="my-2 border p-2 transition duration-300 ease-in-out hover:scale-110"
      >
        Calculate
      </button>
    </form>
  );
};

export default FormTwoNumber;
