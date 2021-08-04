
// Вес Хэмминга — это количество единиц в двоичном представлении числа.
// Реализуйте и экспортируйте по умолчанию функцию, которая считает вес Хэмминга.

const hammingWeight = (number) => {
    let counter = 0;
    const binNumInStrType = number.toString(2);
    for (const symbol of binNumInStrType) {
      counter += Number(symbol);
    }
    return counter;
  };

//   const hammingWeight = (num) => {
//     let weight = 0;
//     const digits = num.toString(2);
  
//     for (let i = 0; i < digits.length; i += 1) {
//       weight += Number(digits[i]);
//     }
  
//     return weight;
//   };
  
//   export default hammingWeight;


// const hammingWeight = (num) => {
//     // num to binary
//     const binary = num.toString(2);
//     // binary (=string) to array and filter all 1s
//     const one = binary.split("").filter((item) => item === "1");
//     return one.length;
//   };
  
//   export default hammingWeight;


console.log(hammingWeight(0)); // 0
console.log(hammingWeight(4)); // 1
console.log(hammingWeight(101)); // 4
