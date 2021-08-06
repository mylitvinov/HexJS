/*
strings.js
Реализуйте внутреннюю функцию takeLast(), которая возвращает последние n символов 
строки в обратном порядке. Количество символов передаётся в takeLast() вторым параметром.
Если передаётся пустая строка или строка меньше необходимой длины, функция должна вернуть null.
*/

const run = (text) => {
    
    const takeLast = (str, n) => {
      if (str.length < n) return null;
      return str
      .slice(-n)
      .split("")
      .reverse()
      .join("");
    };
    return takeLast(text, 4);
  };
  
//   export default run;
  
  console.log(run(''));       // null
  console.log(run('cb'));     // null
  console.log(run('power'));  // rewo
  console.log(run('hexlet')); // telx


//   const run = (text) => {
//     // BEGIN
//     const takeLast = (str, length) => {
//       if (str.length === 0 || str.length < length) {
//         return null;
//       }
  
//       const result = [];
//       for (let i = str.length - 1; result.length < length; i -= 1) {
//         result.push(str[i]);
//       }
  
//       return result.join('');
//     };
//     // END
  
//     return takeLast(text, 4);
//   };