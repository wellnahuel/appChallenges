"use client";
//import Image from "next/image";
import FormTwoNumber from "./components/formTwoNumber/FormTwoNumber";
import FromNonChange from "./components/formNonChange/FormNonChange";
import { useState } from "react";

const Home: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [coins, setCoins] = useState<number[]>([])
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

  const handleFormSubmitCoins = (
    coins: number[],    
    resultCoins: number
  ) => {
    setCoins(coins);
    setResultCoins(resultCoins);
  };

  return (
    <div>
      <div>
        <h1>Calcular suma de un par de números</h1>
        <FormTwoNumber onSubSum={handleFormSubmit} />
        <div>
          <h2>Datos ingresados:</h2>
          <p>Array de números: {numbers.join(", ")}</p>
          <p>TargetSum: {targetSum}</p>
        </div>
        <div>
          <h2>Resultado:</h2>
          <p>
            Resultado:{" "}
            {result.length > 0
              ? result.join(", ")
              : "No se encontró un par que sume el TargetSum."}
          </p>
        </div>
      </div>
      <div>
        <h1>Calcular la cantidad mínima de cambio </h1>
        <FromNonChange onSubCoins={handleFormSubmitCoins} />
        <div>
          <h2>Datos ingresados:</h2>
          <p>Array de monedas: {coins.join(", ")}</p>
        </div>
         <div>
          <h2>Resultado:</h2>
          <p>
            Resultado:{" "}
            {resultCoins !== undefined ? resultCoins > 0
              ? resultCoins
              : "No se encontró un listado de monedas." : `El resultado es ${resultCoins}`}
          </p>
        </div> 
      </div>
    </div>
  );
};

export default Home;
