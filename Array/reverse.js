
// Реализуйте и экспортируйте функцию reverse(),
//  которая принимает на вход массив и располагает элементы внутри него в обратном порядке.


// с встроенным методом 

// const reverse = (arr) => {
//     return arr.reverse();
// }

// без встроенного метода

const reverse = (arr) => {
    for (let i = 0; i < arr.length / 2; i += 1) {
      const first = arr[i];
      const last = arr[arr.length - 1 - i];
      arr[i] = last;
      arr[arr.length - 1 - i] = first;
    }
    return arr;
  };

// const reverse = (arr) => {
//     const lastIndex = arr.length - 1;
//     const middleIndex = lastIndex / 2;
  
//     for (let i = 0; i < middleIndex; i += 1) {
//       const mirrorIndex = lastIndex - i;
//       const temp = arr[i];
//       arr[i] = arr[mirrorIndex];
//       arr[mirrorIndex] = temp;
//     }
//   };

const names = ['john', 'smith', 'karl','maxim'];
 
reverse(names);
console.log(names); // => ['karl', 'smith', 'john']
 
// reverse(names);
// console.log(names); // => ['john', 'smith', 'karl']



