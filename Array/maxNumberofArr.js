// Поиск максимального числа Императивный подход
const numbers = [10, 20, 52, 105, 56, 89, 96];

let max = numbers[0];
for (const number of numbers) {
  if (number > max) {
    max = number;
  }
}

console.log(max); // => 105

// or
let arr = [1, 5, 10, 34, 100];
let max2 = Math.max.apply(null, arr);

console.log(max2);

// Декларативный подоход

// Поиск максимального числа
const numbers = [10, 20, 52, 105, 56, 89, 96];

const max = numbers.reduce(
  (acc, number) => number > acc ? number : acc,
  numbers[0],
);

console.log(max); // => 105