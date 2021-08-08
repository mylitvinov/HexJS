/* 
  Реализуйте и экспортируйте по умолчанию функцию getGirlFriends,
  которая принимает на вход список пользователей и возвращает плоский список подруг
  всех пользователей (без сохранения ключей). Друзья каждого пользователя хранятся в виде
  массива в ключе friends. Пол доступен по ключу gender и может принимать значения
  male или female.
  Подсказки: flatten from lodash
*/

// import {flatten} from 'lodash';

const users = [
  {
    name: 'Tirion',
    friends: [
      { name: 'Mira', gender: 'female' },
      { name: 'Ramsey', gender: 'male' },
    ],
  },
  { name: 'Bronn', friends: [] },
  {
    name: 'Sam',
    friends: [
      { name: 'Aria', gender: 'female' },
      { name: 'Keit', gender: 'female' },
    ],
  },
  {
    name: 'Rob',
    friends: [
      { name: 'Taywin', gender: 'male' },
    ],
  },
];

const getGirlFriends = (users) => {
  /* отображаем всех друзей в отдельный массив */
  const allFriends = users.map(({ friends }) => friends);
  /* нормализуем данные чтобы с ними было удобно работать,
  allFriends это массив подмассивов в которых лежат объекты/друзья,
  выравним его в одноуровневый массив flattens */
  const flattens = allFriends.flat();
  /* затем просто фильтруем одноуровневый массив */
  const filtred = flattens.filter(({ gender }) => gender === 'female');
  return filtred;
// return filtred.map(({name}) => name);

//   const namesGirlfriend = []
//    for (const row of filtred) {
//       namesGirlfriend.push(row.name)
//     }
//     return namesGirlfriend
 };

/* testing */
console.log(getGirlFriends(users));
// [
//   { name: 'Mira', gender: 'female' },
//   { name: 'Aria', gender: 'female' },
//   { name: 'Keit', gender: 'female' }
// ]







//const users = [
//     { name: 'Igor', age: 19 },
//     { name: 'Danil', age: 1 },
//     { name: 'Vovan', age: 4 },
//     { name: 'Matvey', age: 16 },
//   ];
  
//   const result = [];
//   for (const user of users) {
//     if (user.age > 10) {
//       result.push(user);
//     }
//   }
  
//   console.log(result);
  // => [ { name: 'Igor', age: 19 }, { name: 'Matvey', age: 16 } ]
// Теперь посмотрим, как выглядит фильтрация при использовании метода filter():

// const filteredUsers = users.filter((user) => user.age > 10);