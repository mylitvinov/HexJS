// const users = [
//     { name: 'Igor', age: 19 },
//     { name: 'Danil', age: 1 },
//     { name: 'Vovan', age: 4 },
//     { name: 'Matvey', age: 16 },
//   ];
  
//   const result = [];
//   for (const user of users) {
//     result.push(user.name);
//   }
  
//   console.log(result); // => ['Igor', 'Danil', 'Vovan', 'Matvey']
//   /*Здесь мы видим обычную агрегацию с использованием цикла for...of.
//    А что, если нам понадобится извлечь возраст? Повторяем:
//    */
  
// //   const result = [];
// //   // Добавили деструктуризацию
// //   for (const { age } of users) {
// //     result.push(age);
// //   }
  
// //   console.log(result); // => [19, 1, 4, 16]

// //   const names = users.map((user) => user.name);

// // console.log(names); // => ['Igor', 'Danil', 'Vovan', 'Matvey']


// const numbers = [5, 2, 3];

// const newNumbers = numbers.map((number) => number ** 2);

// console.log(newNumbers); // => [25, 4, 9]


//Напишем свою собственную функцию myMap(), работающую аналогично методу массива map():

// const myMap = (collection, callback) => {
//   const result = [];
//   for (const item of collection) {
//     // Вызов переданного колбека на каждом элементе коллекции
//     const newItem = callback(item);
//     // Возврат из колбека добавляется в результирующий массив
//     result.push(newItem);
//   }

//   return result;
// };

// const numbers = [5, 2, 3];
// const newNumbers = myMap(numbers, (number) => number ** 2);
// console.log(newNumbers); // => [25, 4, 9]


/* Реализуйте функцию getChildren, которая принимает на вход список пользователей
и возвращает плоский список их детей. Дети каждого пользователя хранятся в виде массива
в ключе children. */
/* Подсказки метод flat */

const getChildren = (users) => users.map(({ children }) => children).flat();

// const getChildren = (users) => {
//     const childrenOfUsers = users.map(({ children }) => children);
//     return childrenOfUsers.flat();
//   };

/* testing */
const users = [
  {
    name: 'Tirion',
    children: [
      { name: 'Mira', birdhday: '1983-03-23' },
    ],
  },
  { name: 'Bronn', children: [] },
  {
    name: 'Sam',
    children: [
      { name: 'Aria', birdhday: '2012-11-03' },
      { name: 'Keit', birdhday: '1933-05-14' },
    ],
  },
  {
    name: 'Rob',
    children: [
      { name: 'Tisha', birdhday: '2012-11-03' },
    ],
  },
];

console.log(getChildren(users));
// [
//   { name: 'Mira', birdhday: '1983-03-23' },
//   { name: 'Aria', birdhday: '2012-11-03' },
//   { name: 'Keit', birdhday: '1933-05-14' },
//   { name: 'Tisha', birdhday: '2012-11-03' },
// ];