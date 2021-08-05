// Реализуйте и экспортируйте функцию по умолчанию, которая формирует из переданного 
// объекта другой объект, включающий только указанные свойства. Параметры:

// Исходный объект
// Массив имен свойств

const pick = (obj, arrs) => {
    if (!arrs.length) return {};
    const result = {};
    const entries = Object.entries(obj);
    for (const arr of arrs) {
        for (const [key, value] of entries) {
            if (key === arr) result[key] = value;
       }
    }
    return result;
}

const data = {
    user: 'ubuntu',
    cores: 4,
    os: 'linux',
};

console.log(pick(data, ['user'])); // { user: 'ubuntu' }
console.log(pick(data, ['user', 'os'])); // { user: 'ubuntu', os: 'linux' }
console.log(pick(data, [])); // {}
// Если такого свойства нет в исходных данных,
// то оно игнорируется 
console.log(pick(data, ['none', 'cores'])); // { cores: 4 }

////// METHOD 2
const pick = (obj, items) => {
    let result = {};
    const objKeys = Object.keys(obj);
    for (const key of items) {
      if (objKeys.includes(key)) result[key] = obj[key];
    }
    return result;
  };


  // Method 3
//   import _ from 'lodash';

// // BEGIN
// export default (data, keys) => {
//   const result = {};

//   for (const key of keys) {
//     if (_.has(data, key)) {
//       result[key] = data[key];
//     }
//   }

//   return result;
// };