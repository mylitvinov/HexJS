src/prettify.js
Реализуйте и экспортируйте функцию по умолчанию, которая находит текст (дочерние текстовые узлы) внутри элемента <div> и оборачивает текст в параграф.

// <body>
//   <p>Boom</p>
//   text
//   <div>Bam</div>
// </body>
prettify(document);
console.log(document.body.innerHTML);
// <body>
//   <p>Boom</p>
//   text
//   <div><p>Bam</p></div>
// </body>
Алгоритм
Выберите все нужные узлы по тегу
Обойдите каждый выбранный узел, найдите в его дочерних узлах (childNodes) текстовые узлы и замените их на новые узлы, содержащие тег <p>.
Подсказки
Очистка строки от пробельных символов: trim
Замена узлов node.replaceWith()
Проверка текстовых узлов: node instanceof Text