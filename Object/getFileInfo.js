import _ from 'lodash';
const filepath = '/path/to/index.js';
const fileinfo = getFileInfo(filepath);
const getFileInfo = (filepath) => {
    // Разделяем путь на промежуточные директории и файл
    const parts = filepath.split('/');
    // Извлекаем имя файла
    // last извлекает последний элемент из массива
    const filename = _.last(parts); 
    //Затем, точно таким же способом, можно получить и расширение:
    const extension = _.last(filename.split('.'));
  
    // В значения вместо переменных подставятся нужные значения
    const info = { filename: filename, extension: extension };
  
    return info;
  }

//   В примере выше объект создается сразу, когда все данные уже готовы. Иногда делают 
//   по-другому, инициализируют объект в самом начале и постепенно наполняют его данными:

// const getFileInfo = (filepath) => {
//   // Инициализация объекта
//   const info = {};

//   const parts = filepath.split('/');
//   const filename = _.last(parts); 
//   info.filename = filename;

//   const extension = _.last(filename.split('.'));
//   info.extension = extension;

//   return info;
// }