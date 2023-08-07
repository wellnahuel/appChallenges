"use client";
import Image from "next/image";
import FormTwoNumber from "./components/formTwoNumber/FormTwoNumber";
import FromNonChange from "./components/formNonChange/FormNonChange";
import { useState } from "react";

const Home: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [coins, setCoins] = useState<number[]>([]);
  const [targetSum, setTargetSum] = useState<number>(0);
  const [result, setResult] = useState<number[]>([]);
  const [resultCoins, setResultCoins] = useState<number | undefined>(0);

  const handleFormSubmit = (
    numbers: number[],
    targetSum: number,
    result: number[]
  ) => {
    setNumbers(numbers);
    setTargetSum(targetSum);
    setResult(result);
  };

  const handleFormSubmitCoins = (coins: number[], resultCoins: number) => {
    setCoins(coins);
    setResultCoins(resultCoins);
  };

  return (
    <div className="bg-[#FC6865] w-full">
      <div className="flex">
        <Image
          src="https://www.ximplehr.com/data/companies/394_company-logo_1651763066.jpg"
          width="150"
          height="150"
          alt="logo"
        />
      </div>
      <div>
        <h1 className="text-3xl pr-8">
          Calculate the sum of a pair of numbers
        </h1>
        <FormTwoNumber onSubSum={handleFormSubmit} />
        <div className="">
          <h2>Data entered:</h2>
          <p>Array of numbers: {numbers.join(", ")}</p>
          <p>TargetSum: {targetSum}</p>
        </div>
        <div>
          <p>
            Result:{" "}
            {result.length > 0
              ? result.join(", ")
              : "No pair found to add to TargetSum."}
          </p>
        </div>
      </div>
      <div className="bg-[#FC6865] mt-5 w-full">
        <h1 className="text-3xl pr-8">
          Calculate the minimum amount of change{" "}
        </h1>
        <FromNonChange onSubCoins={handleFormSubmitCoins} />
        <div>
          <h2>Data entered:</h2>
          <p>Array of coins: {coins.join(", ")}</p>
        </div>
        <div>
          <p>
            Result:{" "}
            {resultCoins !== undefined
              ? resultCoins > 0
                ? resultCoins
                : "No coin list found."
              : `The result is ${resultCoins}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
