// Реализуйте и экспортируйте по умолчанию функцию, принимающую на вход два 
// массива и возвращающую количество общих уникальных значений в обоих массивах.
// Для получения массива без повторяющихся элементов, используйте uniq из библиотеки lodash.
const getSameCount = (coll1, coll2) => {
    let count = 0;
    const uniqColl1 = _.uniq(coll1);
    const uniqColl2 = _.uniq(coll2);
  
    for (const item1 of uniqColl1) {
      for (const item2 of uniqColl2) {
        if (item1 === item2) {
          count += 1;
        }
      }
    }
  
    return count;
  };

// Общие повторяющиеся элементы: 1, 3, 2
console.log(getSameCount([1, 3, 2, 2], [3, 1, 1, 2, 5])); // 3
 
// Общие повторяющиеся элементы: 4
console.log(getSameCount([1, 4, 4], [4, 8, 4])); // 1
 
// Общие повторяющиеся элементы: 1, 10
console.log(getSameCount([1, 10, 3], [10, 100, 35, 1])); // 2
 
// Нет элементов
console.log(getSameCount([], [])); // 0
