// Реализуйте и экспортируйте по умолчанию функцию, которая проверяет, является ли 
// переданная последовательность целых чисел возрастающей непрерывно (не имеющей 
//     пропусков чисел). Например, последовательность [4, 5, 6, 7] — непрерывная,
//      а [0, 1, 3] — нет. Последовательность может начинаться с любого числа, главное
//       условие — отсутствие пропусков чисел. Последовательность из одного числа не
//        может считаться возрастающей.

const isContinuousSequence = (arrs) => {
if(arrs.length <=1) return false;

for (let i = 0; i < arrs.length - 1 ; i += 1) {
    if (arrs[i] + 1 !== arrs[i + 1]) {
      return false;
    }
  }
return true;
}
console.log(isContinuousSequence([10, 11, 12, 13]));     // true
console.log(isContinuousSequence([-5, -4, -3]));         // true
 
console.log(isContinuousSequence([10, 11, 12, 14, 15])); // false
console.log(isContinuousSequence([1, 2, 2, 3]));         // false
console.log(isContinuousSequence([7]));                  // false
console.log(isContinuousSequence([]));                   // false


// const isContinuousSequence = (coll) => {
//     const size = coll.length;
//     if (size <= 1) {
//       return false;
//     }
  
//     const start = coll[0];
//     for (let index = 1; index < size; index += 1) {
//       if (start + index !== coll[index]) {
//         return false;
//       }
//     }
  
//     return true;
//   };
