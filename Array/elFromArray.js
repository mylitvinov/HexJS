// Реализуйте и экспортируйте по умолчанию функцию, которая извлекает из массива элемент 
// по указанному индексу, если индекс существует, либо возвращает значение по умолчанию. 
// Функция принимает на вход три аргумента:
// Массив
// Индекс
// Значение по умолчанию (равно null)

const elFromArray = (arr, i, param = null) => {
  if (i < arr.length && i >= 0) {
    return arr[i]
  };

  return param;
}

const cities = ['moscow', 'london', 'berlin', 'porto'];

console.log(elFromArray(cities, 1));
console.log(elFromArray(cities, 4));
console.log(elFromArray(cities, 10, 'paris'));
console.log(elFromArray(cities, -1, 'oops'));


// Или
// const get = (arr, index, defaultValue = null) => {
//   if (index >= arr.length || index < 0) {
//     return defaultValue;
//   }

//   return arr[index];
// };
