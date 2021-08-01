// Реализуйте и экспортируйте функцию swap(), которая меняет местами первый и последний 
// элемент массива. Если массив содержит меньше двух элементов, то он возвращается как есть.

const swap = (array) => {
    const last = array[array.length - 1];
    const first = array[0];
    let newArr = [];
    if (array.length < 2) {
        return array
    }
    newArr = array;
    newArr[0] = last;
    newArr[newArr.length - 1] = first;
    return newArr;
}

console.log(swap(['1', '2', '3', '4', '5']));

// Короткое решение

// const swap = (items) => {
//     if (items.length < 2) {
//       return items;
//     }
//     const lastIndex = items.length - 1;
//     const last = items[lastIndex];
//     items[lastIndex] = items[0];
//     items[0] = last;
  
//     return items;
//   };