// удаляем с массива значения null
const compact = (coll) => {
    // Инициализация результата
    // Для пустой входной коллекции результатом будет пустой массив
    const result = [];
  
    for (const item of coll) {
      if (item !== null) {
        result.push(item);
      }
    }
  
    return result;
  };
  
  console.log(compact([0, 1, false, null, true, 'wow', null]));
  // => [ 0, 1, false, true, 'wow' ]
  console.log(compact([]));
  // => []