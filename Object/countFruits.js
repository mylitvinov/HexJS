const fruits = [
    'apple', 'banana', 'pear',
    'apricot', 'apple', 'banana',
    'apple', 'orange', 'pear',
  ];


  //
  const countFruits = (fruits) => {
    const result = {};
  
    for (const name of fruits) {
      // Проверка на существование
      if (result[name] === undefined) {
        result[name] = 1;
      } else {
        result[name] += 1;
      }
    }
  
    return result;
  };

  console.log (countFruits(fruits));


//   const countFruits = (fruits) => {
//     const result = {};
  
//     for (const name of fruits) {
//       // Проверка на существование
//       if (result.hasOwnProperty(name)) {
//         result[name] += 1;
//       } else {
//         result[name] = 1;
//       }
//     }
  
//     return result;
//   };



// import _ from 'lodash';

// for (const name of fruits) {
//   // Проверка на существование
//   if (_.has(result, name)) {
//     result[name] += 1;
//   } else {
//     result[name] = 1;
//   }
// }



// Оператор нулевого слияния
// for (const name of fruits) {
//     result[name] = (result[name] ?? 0) + 1;
//   }