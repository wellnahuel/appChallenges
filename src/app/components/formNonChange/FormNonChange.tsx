// pages/index.tsx
"use client"
import React, { useState } from 'react';
import { nonChange } from '../../services/nonChange';

//defino interface para el tipo de los datos que ingreso al form
interface FormComponentProps {
    onSubCoins: (coins: number[], result: number) => void;
  }

/* const initialFormState: NumberFormState = { //defino estado inicial para usar en el estado acontinuacion
  numberInput: '',
  numbers: [],
  errorMessage: '',
}; */

const FormNonChange: React.FC<FormComponentProps> = ({ onSubCoins }) => {
    const [coins, setCoins] = useState<string>('');
    //const [targetSum, setTargetSum] = useState<string>('');
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const coinsArray = coins.split(',').map(Number);
     // const target = Number(targetSum);
      const resultCoins = nonChange(coinsArray);
      onSubCoins(coinsArray, resultCoins);
    };

    return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Ingrese los números separados por comas:
              <input type="text" value={coins} onChange={(e) => setCoins(e.target.value)} />
            </label>
          </div>
         {/*  <div>
            <label>
              Ingrese el número targetSum:
              <input type="text" value={targetSum} onChange={(e) => setTargetSum(e.target.value)} />
            </label>
          </div> */}
          <button type="submit">Calcular</button>
        </form>
      );
    };
    

export default FormNonChange;
