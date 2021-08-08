// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на 
// вход два отсортированных массива и находит их пересечение.



const getIntersectionOfSortedArrays = (array1,array2) => {
    return array1.filter(value => array2.includes(value));
}

console.log(getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30])); // [10, 24]
 
console.log(getIntersectionOfSortedArrays([10, 11, 24], [-2, 3, 4])); // []
 
console.log(getIntersectionOfSortedArrays([], [2])); // []

// const getIntersectionOfSortedArrays = (arr1, arr2) => {
//     const size1 = arr1.length;
//     const size2 = arr2.length;
  
//     let i1 = 0;
//     let i2 = 0;
//     const result = [];
  
//     while (i1 < size1 && i2 < size2) {
//       if (arr1[i1] === arr2[i2]) {
//         result.push(arr1[i1]);
//         i1 += 1;
//         i2 += 1;
//       } else if (arr1[i1] > arr2[i2]) {
//         i2 += 1;
//       } else {
//         i1 += 1;
//       }
//     }
  
//     return result;
//   };