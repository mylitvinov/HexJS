// Реализуйте и экспортируйте функцию getMax(), которая ищет в массиве максимальное 
// значение и возвращает его.
// 1 вариант
// const getMax = (arrs) => {
//     if (!arrs.length) return null;

//     let max = arrs[0];
//     for (const arr of arrs) {
//         if (arr > max) max = arr;
//     }
//     return max;
// }
// 2 вариант с rest оператором
const getMax = (arrs) => {
    if (!arrs.length) return null;
    let [isMax, ...rest] = arrs;

    for (const el of rest) {
        if (el > isMax) isMax = el;

    }
    return isMax
}


// Для пустого массива возвращается null
console.log(getMax([])); // null
console.log(getMax([1, 10, 8])); // 10

// 3 вариант
// const getMax = (arr) => {
//     if(!arr.length) return null;

//     return Math.max.apply(null,arr);

//     }