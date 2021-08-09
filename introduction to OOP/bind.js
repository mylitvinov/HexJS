/*Функции bind(), apply() и call() работают с контекстом и аргументами. В этом упражнении вы научитесь заменять одну функцию другой для получения функциональности, аналогичной bind().
bind.js
Реализуйте и экспортируйте по умолчанию функцию, которая ведет себя
 аналогично встроенной bind(obj, fn). Аргументы функции:
*/
// obj – объект выступающий в роли контекста
// fn() – функция привязываемая к контексту
const obj = { number: 5 };
const fn = function fn(number) {
  return number + this.number;
};
const fnWithContext = bind(obj, fn);
 
// Принимает столько же аргументов сколько и исходная функция
console.log(fnWithContext(3)); // 8


// BEGIN
export default (context, fn) => (...args) => fn.apply(context, args);

/*
Если разложить решение учителя на обычные функции, то получится такой код:
const bind = function (context, fn) {
  return function (...args) { // упаковка входных данных в массив
    return fn.apply(context, args);
  };
};

----

Как это работает:

bind обычно вызывается как метод на объекте функции,
поэтому требуется передача аргументом только контекста:
const obj = { number: 5 };
const fn = function fn(number) {
  return number + this.number;
};
const bindedFn1 = fn.bind(obj);
в данной задаче bind является отдельной функцией, а не методом, поэтому fn передаётся аргументом:
const bindedFn2 = bind(obj, fn); // возврат функции из функции

bindedFn1(7); // 12
bindedFn2(7); // 12

----

Альтернативное решение:
const bind = (context, fn) => (...args) => fn.call(context, ...args);
*/
// END