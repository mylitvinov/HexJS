// Реализуйте и экспортируйте функцию flatten(). Эта функция принимает на
//  вход массив и выпрямляет его: если элементами массива являются массивы, 
//  то flatten сводит всё к одному массиву, раскрывая один уровень вложенности.

// В js эта функция реализована как метод flat() у массивов. Его использовать нельзя.

const flatten = (arrs) => {
    if(!arrs.length) return[];
    let result = [];
    for (const arr of arrs) {
        Array.isArray(arr) ?  result = [...result, ...arr] : result.push(arr);
     }
     return result;
}

// const flatten = (coll) => {
//     let result = [];
//     for (const item of coll) {
//       if (Array.isArray(item)) {
//         result = [...result, ...item];
//       } else {
//         result = [...result, item];
//       }
//     }
  
//     return result;
//   };


// Для пустого массива возвращается []
flatten([]); // []
flatten([1, [3, 2], 9]); // [1, 3, 2, 9]
flatten([1, [[2], [3]], [9]]); // [1, [2], [3], 9]
