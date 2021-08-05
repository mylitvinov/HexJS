/*
objects.js
Реализуйте и экспортируйте по умолчанию функцию, которая выполняет глубокое копирование объектов.
Для решения этой задачи, нужно последовательно обойти исходный объект и скопировать его данные в другой объект. Если значением какого-то свойства является объект, то нужно рекурсивно запустить реализованную функцию.
*/

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

import isObject from 'lodash/isObject';

// BEGIN (write your solution here)
const cloneDeep = (obj) => {
  const result = {};
  const entries = Object.entries(obj);
  for (const [key, value] of entries) {
    result[key] = isObject(value) ? cloneDeep(value) : value;
  }
  return result;
};

export default cloneDeep;
// END


import cloneDeep from '../objects.js';

const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

// result имеет такую же структуру, как и data
const result = cloneDeep(data);

// Но внутри другие объекты
result.key2 !== data.key2; // true
result.key2.innerKey !== data.key2.innerKey; // true