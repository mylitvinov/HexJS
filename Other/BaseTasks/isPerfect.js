// Создайте функцию isPerfect(), которая принимает число и возвращает true, 
// если оно совершенное, и false — в ином случае.

// Совершенное число — положительное целое число, равное сумме его положительных 
// делителей (не считая само число). Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.

const isPerfect = (num) => {
    if (num == 0) return false;
    let isNum = 0;
    for (let i = 1; i < num; i++) {
        num % i == 0 ? isNum += i : isNum += 0;

    }

    return isNum == num ? true : false;
}

console.log(isPerfect(6))


// 2 вариант

// const isPerfect = (num) => {
//     if (num < 6) return false;
  
//     let sum = 0;
//     const upperBorder = num / 2;
  
//     for (let divisor = 1; divisor <= upperBorder; divisor += 1) {
//       if (num % divisor === 0) sum += divisor;
//     }
  
//     return sum === num;
//   };