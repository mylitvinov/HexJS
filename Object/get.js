/*
objects.js
Реализуйте и экспортируйте по умолчанию функцию, которая извлекает из объекта любой глубины 
вложенности значение по указанным ключам. Параметры:
Исходный объект
Цепочка ключей (массив), по которой ведётся поиск значения
В случае, когда добраться до значения невозможно, возвращается null.
*/

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const get = (data, path) => {
    if (path.length === 1) return data[path[0]] ?? null;
    if (!data.hasOwnProperty(path[0])) return null;
    return get(data[path[0]], path.slice(1));
  };
  export default get ;
  // END
  
  const data = {
    user: 'ubuntu',
    hosts: {
      0: {
        name: 'web1',
      },
      1: {
        name: 'web2',
        null: 3,
        active: false,
      },
    },
  };
  
  get(data, ['undefined']); // null
  get(data, ['user']); // 'ubuntu'
  get(data, ['user', 'ubuntu']); // null
  get(data, ['hosts', 1, 'name']); // 'web2'
  get(data, ['hosts', 0]); // { name: 'web1' }
  get(data, ['hosts', 1, null]); // 3
  get(data, ['hosts', 1, 'active']); // false
  
  
  // Another solution
  
  // BEGIN
//   export default (data, keys) => {
//     let current = data;
//     for (const key of keys) {
//       const hasBarProperty = Object.prototype.hasOwnProperty.call(current, key);
//       if (!hasBarProperty) {
//         return null;
//       }
//       current = current[key];
//     }
  
//     return current;
//   };
  // END