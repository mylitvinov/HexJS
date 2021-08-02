// Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает
//  строку задом наперед, используя рекурсию.

const reverse = (str) => {
    let newStr = '';
    if (str === '') return '';
    newStr += reverse(str.slice(1)) + str.slice(0,1);
    return newStr;
}
console.log(reverse('str'));    // rts
console.log(reverse('hexlet')); // telxeh

// const reverse = (str) => {
//     if (str.length === 0) {
//       return str;
//     }
  
//     return `${str.slice(-1)}${reverse(str.slice(0, -1))}`;
//   };
  
  // Альтернативный вариант с использованием тернарного оператора
  // const reverse = (str) => (
  //   str.length === 0
  //     ? str
  //     : `${str.slice(-1)}${reverse(str.slice(0, -1))}`
  // );