// // Функция изменяет входящий массив coll
// const bubbleSort = (coll) => {
//     let stepsCount = coll.length - 1;
//     // Объявляем переменную swapped, значение которой показывает был ли
//     // совершен обмен элементов во время перебора массива
//     let swapped;
//     // do..while цикл. Работает почти идентично while
//     // Разница в проверке. Тут она делается не до выполнения тела, а после.
//     // Такой цикл полезен там, где надо выполнить тело хотя бы раз в любом случае.
//     do {
//       swapped = false;
//       // Перебираем массив и меняем местами элементы, если предыдущий
//       // больше, чем следующий
//       for (let i = 0; i < stepsCount; i += 1) {
//         if (coll[i] > coll[i + 1]) {
//           // temp – временная константа для хранения текущего элемента
//           const temp = coll[i];
//           coll[i] = coll[i + 1];
//           coll[i + 1] = temp;
//           // Если сработал if и была совершена перестановка,
//           // присваиваем swapped значение true
//           swapped = true;
//         }
//       }
//       // Уменьшаем счетчик на 1, т.к. самый большой элемент уже находится
//       // в конце массива
//       stepsCount -= 1;
//     } while (swapped); // продолжаем, пока swapped === true

//     return coll;
//   };

//   console.log(bubbleSort([3, 2, 10, -2, 0])); // => [ -2, 0, 2, 3, 10 ]


const bubbleSort = (arr) => {
    // let stepsCount = arr.length - 1;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        // stepsCount -= 1;
    } while (swapped);
    return arr;
}


console.log(bubbleSort([3, 2, 10, -2, 0])); // => [ -2, 0, 2, 3, 10 ]