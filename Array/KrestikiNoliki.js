// Инициализируем поле
const field = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  
  // Делаем ход:
  field[1][2] = 'x';
  // [
  //     [null, null, null],
  //     [null, null, 'x'],
  //     [null, null, null],
  // ]

  const didPlayerMove = (field, symbol) => {
    // Обходим поле. Каждый элемент — это строчка в игровом поле.
    for (const row of field) {
      // метод includes проверяет присутствует ли элемент в массиве,
      if (row.includes(symbol)) { // Если присутствует, значит мы нашли то, что искали.
        return true;
      }
    }
  
    // Если поле было просмотрено, но ничего не нашли,
    // значит ходов не было.
    return false;
  }

  didPlayerMove(field, 'x'); // true
  didPlayerMove(field, 'o'); // false