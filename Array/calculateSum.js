// Реализуйте и экспортируйте по умолчанию функцию, которая высчитывает
//  сумму всех элементов массива, которые делятся без остатка на 3 (три).

const calculateSum = (arr) => {
    if (arr.length === 0) return 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) sum += arr[i];
    }
    return sum;
}

const coll1 = [8, 9, 21, 19, 18, 22, 7];
console.log(calculateSum(coll1)); // 48
 
const coll2 = [2, 0, 17, 3, 9, 15, 4];
console.log(calculateSum(coll2)); // 27