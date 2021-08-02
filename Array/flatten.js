//Вложенные циклы
[[3, 2], 5, 3, [3, 4, 2], 10].flat();
// [3, 2, 5, 3, 3, 4, 2, 10]

const flatten = (coll) => {
    const result = [];
    for (const item of coll) {
      // Array.isArray — функция-предикат стандартной библиотеки,
      // которая проверяет, является ли значение массивом.
      if (Array.isArray(item)) {
        // Если значение массив, то проходим по всем его элементам
        // Здесь появился вложенный цикл
        for (const subItem of item) {
          // и добавляем их в результирующий массив
          result.push(subItem);
        }
      } else {
        // Если значение не массив, то сразу добавляем его в результирующий массив
        result.push(item);
      }
    }
  
    return result;
  };
  
  console.log(flatten([3, 2, [], [3, 4, 2], 3, [123, 3]]));
  // => [ 3, 2, 3, 4, 2, 3, 123, 3 ]


//Пример выноса в отдельную функцию кода на flatten:
//   const append = (arr1, arr2) => {
//     for (const item of arr2) {
//       arr1.push(item);
//     }
//   };
  
//   const flatten = (coll) => {
//     const result = [];
//     for (const item of coll) {
//       if (Array.isArray(item)) {
//         // Нет присваивания так как меняется сам result
//         append(result, item);
//       } else {
//         result.push(item);
//       }
//     }
  
//     return result;
//   };
  
//   flatten([3, 2, [], [3, 4, 2], 3, [123, 3]]);
//   // [3, 2, 3, 4, 2, 3, 123, 3]