export function findPairWithSum(numbers: number[], targetSum: number): number[] {
    const numberToShow: { [key: number]: boolean } = {};
  
    for (let i=0 ; i < numbers.length; i++) { 
      const num = numbers[i] 
      const add = targetSum - num 
      if (numberToShow[add] !== undefined) { 
          return [num, add]
      }
      numberToShow[num] = true; 
      console.log([num, add])
  }
  
    return [];
  }
  