// Реализуйте и экспортируйте по умолчанию функцию, которая переворачивает
//  цифры в переданном числе и возвращает новое число.

const reverseInt = (num) => {
    const numAbs = Math.abs(num);
    let numToStr = String(numAbs);
    let newStr = '';

    for (let i = numToStr.length - 1; i >= 0; i--) {
        newStr += numToStr[i];
    }
    return num < 0 ? +(-newStr) : +newStr;
}

console.log(reverseInt(1234));

// Решение 2
// const reverseInt = (num) => {
//     const numAsStr = String(Math.abs(num));
//     let reversedStr = '';
  
//     for (let i = numAsStr.length - 1; i >= 0; i -= 1) {
//       reversedStr += numAsStr[i];
//     }
//     const reversedModule = Number(reversedStr);
  
//     return num < 0 ? -reversedModule : reversedModule;
//   };