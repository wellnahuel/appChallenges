import React from 'react';


export function nonChange(coins: number[]): number {
    let sortedCoins: number[] = coins.sort((a, b) => a - b);
    let min: number = 1; 
    for (let i: number = 0; i < sortedCoins.length; i++) { 
        if (sortedCoins[i] <= min) { 
            min = min + sortedCoins[i];
        }
    }
    return min; 
}





