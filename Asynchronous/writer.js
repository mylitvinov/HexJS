/*writer.js
Реализуйте асинхронную функцию, которая записывает данные по указанному
 пути и оповещает о завершении работы через переданный колбек.
  Экспортируйте функцию по умолчанию.

import write from './writer.js';
 */
write('./myfile', 'data', () => {
  console.log('success');
});


// Подсказки:
// для записи в файл используйте функцию fs.writeFile().

const write = (filepath, data, cb) => {
  fs.writeFile(filepath, data, cb);
};
// END


// BEGIN (write your solution here)
// const write = (path, data, cb) => {
//   fs.writeFile(path, data, (_error) => {
//     if (_error) throw _error;
//     cb();
//   });
// };

// export default (path, data, cb) => fs.writeFile(path, data, cb);