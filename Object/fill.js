
/*
objects.js
Реализуйте и экспортируйте по умолчанию функцию, которая заполняет объект данными из другого объекта по разрешенному списку ключей. Параметры:
Исходный объект
Список ключей которые нужно заменить
Данные, которые нужно сливать в исходный объект
В случае, когда список ключей пустой, нужно сливать все данные полностью.
*/

// @ts-check

import _ from 'lodash';

// BEGIN (write your solution here)

const fill = (obj, keys, data) => {
  let newData = keys.length ? _.pick(data, keys) : data;
  return Object.assign(obj, newData);
};

export default fill;
// END



// import fill from '../objects.js';

const company = {
  name: null,
  state: 'moderating',
};

const data = {
  name: 'Hexlet',
  state: 'published',
};

// Вызовы ниже нужно рассматривать как независимые

console.log(fill(company, ['name'], data));
// {
//   name: 'Hexlet',
//   state: 'moderating',
// }

fill(company, [], data);
// {
//   name: 'Hexlet',
//   state: 'published',
// }


// import _ from 'lodash';

// // BEGIN
// export default (object, keys, data) => {
//   const filteredData = keys.length > 0 ? _.pick(data, keys) : data;
//   Object.assign(object, filteredData);
// };