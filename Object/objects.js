// Реализуйте и экспортируйте по умолчанию функцию, которая возвращает 
// ассоциативный массив, соответствующий JSON из файла example.json в этом упражнении. 
// Всё, что вам нужно сделать — посмотреть на содержимое example.json и руками
//  сформировать объект аналогичной структуры.
// {
//     "files": [
//       "src/objects.js"
//     ],
//     "config": true
//   }

const objects = () => {
    const obj = {
        files: ["src/objects.js"],
        config: true,
    }
   return obj
}