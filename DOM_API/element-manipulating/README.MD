normalize.js
Реализуйте и экспортируйте по умолчанию функцию, которая нормализует имена классов для всех элементов на странице. В данном случае это означает, что происходит преобразование всех классов, написанных с использованием kebab нотации, в camelCase нотацию: text-center => textCenter

Попробуйте решить эту задачу без использования регулярных выражений.

Примеры
// <body>
//   <div class="text-center row-b">Bam</div>
// </body>
normalize(document);
console.log(document.body.innerHTML);
// <body>
//   <div class="textCenter rowB">Bam</div>
// </body>
Подсказки
Самый простой способ найти все элементы в документе это document.body.getElementsByTagName('*')
Приведение к camelCase https://lodash.com/docs#camelCase
Замена классов replace у объекта classList