// Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает переданные версии
//  version1 и version2. Если version1 > version2, то функция должна вернуть 1, 
//  если version1 < version2, то - -1, если же version1 === version2, то - 0.

// Версия - это строка, в которой два числа (мажорная и минорные версии) разделены точкой, 
// например: 12.11. Важно понимать, что версия - это не число с плавающей точкой, а несколько
//  чисел не связанных между собой. Проверка на больше/меньше производится
//   сравнением каждого числа независимо. Поэтому версия 0.12 больше версии 0.2.



  const compareVersion = (first, second) => {
    const [a1, b1] = first.split('.');
    const [a2, b2] = second.split('.');
  
    const major = Math.sign(a1 - a2); //
    const minor = Math.sign(b1 - b2); //
  
    return major === 0 ? minor : major;
  };


// const compareVersion = (a, b) => {
//     let vers1 = a.split(".");
//     let vers2 = b.split(".");
  
//     for (let i = 0; i < 2; i++) {
//       if (~~vers1[i] < ~~vers2[i]) return -1;
//       if (~~vers1[i] > ~~vers2[i]) return 1;
//     }
//     return 0;
//   }




console.log(compareVersion("0.1", "0.2")); // -1
 
console.log(compareVersion("0.2", "0.1")); // 1
 
console.log(compareVersion("4.2", "4.2")); // 0
