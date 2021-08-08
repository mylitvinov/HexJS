
// Реализуйте функцию getSameParity, которая принимает на вход массив чисел и 
// возвращает новый, состоящий из элементов, у которых такая же чётность, как и у первого
//  элемента входного массива. Экспортируйте функцию по умолчанию.

const getSameParity = (coll) => {
    if (coll.length === 0) {
      return [];
    }
  
    const result = [];
    const remainder = Math.abs(coll[0] % 2);
  
    for (const item of coll) {
      if (Math.abs(item % 2) === remainder) {
        result.push(item);
      }
    }
  
    return result;
  };
  
  export default getSameParity;

// const getSameParity = (arr) => {
//     if (arr.length === 0) return [];
//     const newArr = [];

//     for (const num of arr) {
//         // const numAbs = Math.abs(num);

//         if (arr[0] % 2 === 0 && num % 2 === 0) newArr.push(num);
//         if (arr[0] !== 0 && num % 2 !== 0) newArr.push(num);

//     }
//     return newArr;

// }

// console.log(getSameParity([]));        // []
// console.log(getSameParity([1, 2, 3])); // [1, 3]
// console.log(getSameParity([1, 2, 8])); // [1]
console.log(getSameParity([2, 2, 8])); // [2, 2, 8]
