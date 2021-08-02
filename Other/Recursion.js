const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

const answer = factorial(3);


const sum1 = (n) => {
    if (n === 1) {
        return 1;
    }

    return n + sum1(n - 1);
};
// или
const sum2 = n => (n === 1) ? 1 : n + sum2(n - 1);

//Функция-однострочник sum принимает целое положительное число n
// и возвращает сумму всех чисел, входящих в интервал [0, n]:

const sum3 = n => (n === 0) ? 0 : n + sum(n - 1);


//Ниже приведено определение функции product, которая принимает на вход целое
//  положительное число n, меньшее или равное 5, и возвращает произведение всех чисел,
//   входящих в интервал [n, 5].

const product = (n) => {
    if (n === 5) {
        return n;
    }
    return n * product(n + 1);


};

/*
 * вычисление: 2 * 3 * 4 * 5 * 6 * 7 * ...
 * RangeError: Maximum call stack size exceeded
 */
product(2);

// Реализуйте (с использованием рекурсивного процесса) функцию sequenceSum, которая
//  находит сумму последовательности целых чисел. Последовательность задается двумя значениями:
//   begin - начало последовательности, end - конец последовательности. Например: begin = 2
//    и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6.
//     Сумма такой последовательности    будет: 20.

const sequenceSum = (begin, end) => {
    // BEGIN (write your solution here)
    if (begin > end) {
      return NaN;
    } else if(begin === end) {
      return begin;
    } else {
      return end + sequenceSum(begin, end-1);
    }
    // END
  };

  // ИЛИ

  const sequenceSum2 = (begin, end) => {
    // BEGIN
    // Visualize Execution: https://goo.gl/UlTxCs
    if (begin > end) {
      return NaN;
    }
    if (begin === end) {
      return begin;
    }
    return begin + sequenceSum2(begin + 1, end);
    // END
  };
  
  export default sequenceSum2;