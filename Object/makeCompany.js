/*
objects.js
Реализуйте и экспортируйте по умолчанию функцию, которая создает объект компании и возвращает его. Для создания компании обязательно только одно свойство – имя компании. Остальные свойства добавляются только если они есть. Параметры:
Имя
Объект с дополнительными свойствами
Также у компаний есть два свойства со значениями по умолчанию:
state – moderating
createdAt – текущая дата
*/

// @ts-check

// BEGIN (write your solution here)
const make = (name, data) => {
    const defaultData = {
      state: 'moderating',
      createdAt: Date.now(),
    };
    const newObj = {...defaultData, ...data, name: name};
    return newObj;
  };
//   export default make;
  // END

//   export default (name, data = {}) => {
//     const defaultData = {
//       state: 'moderating',
//       createdAt: Date.now(),
//     };
  
//     return { ...defaultData, ...data, name };
//   };
  
  
  console.log(make('Hexlet'));
  // {
  //   name: 'Hexlet',
  //   state: 'moderating',
  //   createdAt: <тут текущая дата>
  // }
  
  console.log(make('Hexlet', { website: 'hexlet.io', state: 'published' }));
  // {
  //   name: 'Hexlet',
  //   website: 'hexlet.io',
  //   state: 'published',
  //   createdAt: <тут текущая дата>
  // }