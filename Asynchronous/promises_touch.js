/* file.js
Реализуйте и экспортируйте асинхронную функцию touch, которая создает файл если
 его не существует.
import { touch } from './file.js';
touch('/myfile').then(() => console.log('created!'));
Подсказка
fs.access - проверка существования файла */

/* eslint-disable import/prefer-default-export */
import { promises as fs } from 'fs';


/* teacher solution */
export const touch = (filepath) => fsp.access(filepath)
  .catch(() => fsp.writeFile(filepath, ''));
// END