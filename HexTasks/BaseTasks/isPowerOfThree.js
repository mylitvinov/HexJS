// Реализуйте и экспортируйте по умолчанию функцию, которая определяет, является ли 
// переданное число натуральной степенью тройки. Например, число 27 — это третья степень: 3^3, 
// а 81 — это четвёртая: 3^4.


const isPowerOfThree = (num) => {
    let current = 1;
    while (current < num) {
      current *= 3;
    }
  
    return current === num;
  };

console.log(isPowerOfThree(1)); // true (3^0)
console.log(isPowerOfThree(3)); // true
console.log(isPowerOfThree(243)); // true (3^2)
