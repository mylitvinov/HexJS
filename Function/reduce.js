/*
groupBy.js
Реализуйте и экспортируйте по умолчанию функцию для группировки объектов по 
заданному свойству. Функция принимает аргументами массив объектов и название свойству 
для группировки. Она должна возвращать объект, где ключ - это значение по заданному 
свойству, а значение - массив с данными, подходящими для группы.
*/

// BEGIN
export default (data, name) => {
    return data.reduce((acc, curr) => {
      const key = curr[name];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(curr);
      return acc;
    }, {});
  };
  // END

//   const groupBy = (objects, key) => objects.reduce((acc, object) => {
//     // из каждого объекта берётся значение по ключу
//     const groupName = object[key];
//     // контейнером группы выступает массив
//     const group = acc[groupName] ?? []; // Оператор нулевого слияния возвращает пустой массив, если в аккумуляторе ничего нет
//     // возвращается новый объект аккумулятора
//     return { ...acc, [groupName]: group.concat(object) }; // квадратные скобки нужны, чтобы указать имя группы в качестве ключа
//     // старый аккумулятор деструктурируется, для текущей группы записывается новый массив с данными
//   }, {});
  
  import groupBy from './groupBy.js';
  
  const students = [
    { name: 'Tirion', class: 'B', mark: 3 },
    { name: 'Keit', class: 'A', mark: 3 },
    { name: 'Ramsey', class: 'A', mark: 4 },
  ];
  
  groupBy([], ''); // {}
  groupBy(students, 'mark');
  // {
  //   3: [
  //     { name: "Tirion", class: "B", mark: 3 },
  //     { name: "Keit", class: "A", mark: 3 },
  //   ],
  //   4: [
  //     { name: "Ramsey", class: "A", mark: 4 },
  //   ],
  // }

// const users = [
//     { name: 'Igor', amount: 19 },
//     { name: 'Danil', amount: 1 },
//     { name: 'Vovan', amount: 4 },
//     { name: 'Matvey', amount: 16 },
//   ];
  
//   let sum = 0;
//   for (const user of users) {
//       sum += user.amount;
//   }
  
//   console.log(sum); // => 

// const sum = users.reduce((acc, user) => acc + user.amount, 0);
// console.log(sum); // => 40


// Посмотрим ещё один пример агрегации — группировку имён пользователей по возрасту:

// import _ from 'lodash';

// const users = [
//   { name: 'Petr', age: 4 },
//   { name: 'Igor', age: 19 },
//   { name: 'Vovan', age: 4 },
//   { name: 'Matvey', age: 16 },
// ];

// const usersByAge = {};
// for (const { age, name } of users) {
//   // Функция _.has() проверяет наличие свойства в объекте,
//   if (!_.has(usersByAge, age)) {
//     usersByAge[age] = [];
//   }
//   usersByAge[age].push(name);
// }

// console.log(usersByAge);
// // => { 4: [ 'Petr', 'Vovan' ], 16: [ 'Matvey' ], 19: [ 'Igor' ] }