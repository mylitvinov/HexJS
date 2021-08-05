// Назовем счастливыми числами те, которые в результате ряда преобразований 
// вида "сумма квадратов цифр" превратятся в единицу. Например:

// 7   => 7^2 = 49,
// 49  => 4^2 + 9^2 = 16 + 81 = 97,
// 97  => 9^2 + 7^2 = 81 + 49 = 130,
// 130 => 1^2 + 3^2 + 0^2 = 10,
// 10  => 1^2 + 0^2 = 1.

const sumOfSquareDigits = (num) => {
    const numAsStr = String(num);
    let sum = 0;
    for (let i = 0; i < numAsStr.length; i += 1) {
      const digit = Number(numAsStr[i]);
      sum += digit * digit;
    }
   return sum;
  };

  const isHappyNumber = (num) => {
    let res = num;
    for (let acc = 0; acc <= 10; acc++) {
        if (res === 1) return true;
        res = sumOfSquareDigits(res);
    }
    return res === 1;
};

console.log(isHappyNumber(1)); // true
console.log(isHappyNumber(7)); // true
console.log(isHappyNumber(13)); // true
console.log(isHappyNumber(0)); // false
console.log(isHappyNumber(2)); // false

// export default (num) => {
//     let number = num;
//     for (let i = 0; i < 10; i += 1) {
//       number = sumOfSquareDigits(number);
//       if (number === 1) {
//         return true;
//       }
//     }
//     return false;
//   };