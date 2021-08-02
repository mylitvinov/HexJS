const calculateMax = (coll) => {
    // Если коллекция пустая, то у нее не может быть максимального
    // В подобных ситуациях принято возвращать null
    if (coll.length === 0) {
      return null;
    }
  
    // Сравнение элементов нужно начать с какого-то первого элемента
    let max = coll[0]; // Принимаем за максимальное первый элемент
    // Обход начинаем со второго элемента
    for (let i = 1; i < coll.length; i += 1) {
      const currentElement = coll[i];
      // Если текущий элемент больше максимального,
      // то он становится максимальным
      if (currentElement > max) {
        max = currentElement;
      }
    }
  
    // Не забываем вернуть максимальное число
    return max;
  };
  
  console.log(calculateMax([])); // => null
  console.log(calculateMax([3, 2, -10, 38, 0])); // => 38