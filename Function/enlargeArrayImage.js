/*
arrays.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает изображение
 в виде двумерного массива и возвращает массив, увеличенный в два раза.
*/

// @ts-check

// BEGIN (write your solution here)
const double = (items) => items.map((item) => [item, item]).flat();
const enlargeArrayImage = (arr) => double(arr.map((array) => double(array)));
export default enlargeArrayImage;
// END



const arr = [
  ['*', '*', '*', '*'],
  ['*', ' ', ' ', '*'],
  ['*', ' ', ' ', '*'],
  ['*', '*', '*', '*'],
];
// ****
// *  *
// *  *
// ****

enlargeArrayImage(arr);
// ********
// ********
// **    **
// **    **
// **    **
// **    **
// ********
// ********