"use client"
import Image from 'next/image'
import FormTwoNumber from './components/formTwoNumber/FormTwoNumber'
import { useState } from 'react';

const Home: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [targetSum, setTargetSum] = useState<number>(0);
  const [result, setResult] = useState<number[]>([]);

  const handleFormSubmit = (numbers: number[], targetSum: number, result: number[]) => {
    setNumbers(numbers);
    setTargetSum(targetSum);
    setResult(result);
  };

  return (
    <div>
      <h1>Calcular suma de un par de números</h1>
      <FormTwoNumber onSub={handleFormSubmit} />
      <div>
        <h2>Datos ingresados:</h2>
        <p>Array de números: {numbers.join(', ')}</p>
        <p>TargetSum: {targetSum}</p>
      </div>
      <div>
        <h2>Resultado:</h2>
        <p>Resultado: {result.length > 0 ? result.join(', ') : 'No se encontró un par que sume el TargetSum.'}</p>
      </div>
    </div>
  );
};

export default Home;






