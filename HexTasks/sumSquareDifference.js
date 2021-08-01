// Сумма квадратов первых десяти натуральных чисел это 12 + 22 + 32 + ... + 10 2 = 385.

// Квадрат суммы первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)2 = 552 = 3025.

// Разница между квадратом суммы и суммой квадратов первых десяти натуральных чисел: 
// 3025 − 385 = 2640.

// Напишите функцию sumSquareDifference(), которая принимает аргумент n и возвращает 
// разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.

const sumSquareDifference = (n) => {
    let sumSquare = 0;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sumSquare += i ** 2;
    }
    for (let i = 0; i <= n; i++) {
        sum += i;
    }

    return sum ** 2 - sumSquare;

}

console.log(sumSquareDifference(10))


//  решение 2

// const sumOfSquares = (n) => {
//     let sum = 0;
  
//     for (let i = 1; i <= n; i += 1) {
//       sum += i * i;
//     }
  
//     return sum;
//   };
  
//   const squareOfSum = (n) => {
//     let sum = 0;
  
//     for (let i = 1; i <= n; i += 1) {
//       sum += i;
//     }
  
//     return sum * sum;
//   };
  
//   const sumSquareDifference = (n) => squareOfSum(n) - sumOfSquares(n);