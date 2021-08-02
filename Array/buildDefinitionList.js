// Реализуйте функцию buildDefinitionList(), которая генерирует HTML список 
// определений (теги <dl>, <dt> и <dd>) и возвращает получившуюся строку. 
//     При отсутствии элементов в массиве функция возвращает пустую строку. 
//     Экспортируйте функцию по умолчанию.

const buildDefinitionList = (arrs) => {
    if(arrs.length === 0) return '';
const newArr = [];
 for (const arr of arrs) {
     newArr.push(`<dt>${arr[0]}</dt><dd>${arr[1]}</dd>`)
 }
 const innerValue = newArr.join('');
 const result = `<dl>${innerValue}</dl>`;
//  console.log(typeof result);
 return result;

}

const definitions = [
    ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
    ['Бобр', 'Животное из отряда грызунов'],
  ];
   
  console.log(buildDefinitionList(definitions));
  // '<dl><dt>Блямба</dt><dd>Выпуклость, утолщение на поверхности чего-либо</dd><dt>Бобр</dt><dd>Животное из отряда грызунов</dd></dl>';
  