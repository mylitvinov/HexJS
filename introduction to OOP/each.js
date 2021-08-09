/*collection.js
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход коллекцию 
объектов и колбек функцию. Эта функция должна вызывать колбек для каждого объекта 
коллекции. Главная особенность этой функции в том, что она передает объекты коллекции 
не в саму функцию, а устанавливает их как контекст.

Подобная функция существует в библиотеке JQuery

import each from './collection.js';
*/

 
const objects = [
  { name: 'Karl' },
  { name: 'Mia' },
];
each(objects, function callback() {
  this.name = this.name.split('').reverse().join('');
});
 
console.log(objects);
// [
//   { name: 'lraK' },
//   { name: 'aiM' },
// ];

// BEGIN
export default (objects, callback) => objects.forEach((object) => callback.call(object));
// END