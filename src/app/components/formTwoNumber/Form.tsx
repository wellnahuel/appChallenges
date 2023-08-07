// pages/index.tsx
"use client"
import React, { useState } from 'react';
import { findPairWithSum } from '../../services/findPairWithSum';

//defino interface para el tipo de los datos que ingreso al form
interface FormComponentProps {
    onSub: (numbers: number[], targetSum: number, result: number[]) => void;
  }

/* const initialFormState: NumberFormState = { //defino estado inicial para usar en el estado acontinuacion
  numberInput: '',
  numbers: [],
  errorMessage: '',
}; */

const Form: React.FC<FormComponentProps> = ({ onSub }) => {
    const [numbers, setNumbers] = useState<string>('');
    const [targetSum, setTargetSum] = useState<string>('');
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const numbersArray = numbers.split(',').map(Number);
      const target = Number(targetSum);
      const result = findPairWithSum(numbersArray, target);
      onSub(numbersArray, target, result);
    };

    return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Ingrese los números separados por comas:
              <input type="text" value={numbers} onChange={(e) => setNumbers(e.target.value)} />
            </label>
          </div>
          <div>
            <label>
              Ingrese el número targetSum:
              <input type="text" value={targetSum} onChange={(e) => setTargetSum(e.target.value)} />
            </label>
          </div>
          <button type="submit">Calcular</button>
        </form>
      );
    };
    

export default Form;
