
// Реализуйте и экспортируйте по умолчанию функцию, которая возвращает среднее
//  арифметическое всех переданных аргументов. Если функции не передать ни одного аргумента,
//   то она должна вернуть null.

// import _ from 'lodash';

// BEGIN (write your solution here)
const average = (...numbers) => {
  if (!numbers.length) return null;
  return _.sum(numbers) / numbers.length;
};


console.log(average(0)); // 0
console.log(average(0, 10)); // 5
console.log(average(-3, 4, 2, 10)); // 3.25
console.log(average()); // null