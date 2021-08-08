// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив и число, 
// которое задает размер чанка (куска). Функция должна вернуть массив, состоящий из чанков
//  указанной размерности.

const chunk = (arr, num) => {
    const result = [];
    for (let i = 0; i < arr.length; i += num) {
        result.push(arr.slice(i,i+num)) 
    }
    return result;
}


console.log(chunk(['a', 'b', 'c', 'd'], 2));
// [['a', 'b'], ['c', 'd']]
 
console.log(chunk(['a', 'b', 'c', 'd'], 3));
// [['a', 'b', 'c'], ['d']]


// const chunkRecursive = (arr, size) => {
//     if (size > arr.length) {
//         return arr.length ? [arr] : arr;
//     }
//     const head = arr.slice(0, size);
//     const tail = arr.slice(size);
//     return [head, ...chunk(tail, size)];
// };