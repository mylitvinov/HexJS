// Задача состоит в том, чтобы файл math.js импортировал в себя все функции из трех
//  описанных выше файлов и выставил их наружу (то есть сделал их реэкспорт) под 
//  следующими именами: pow, sum, sub, sqrt и multi. А так же экспортировал функцию 
//  cube() по умолчанию.

// В этом задании специально не сказано, где какая функция и под каким именем лежит.
// А так же не сказано, как они все экспортируются. Цель этого задания в том, чтобы вы 
// хорошо разобрались с системой модулей, что очень упростит вашу жизнь в дальнейшем.

// @ts-check
// BEGIN (write your solution here)
// import cube from './numbers1';
// import multi, { pow2 as pow, sum2 as sum, sub2 as sub } from './numbers2';
// import sqrt from './numbers3';

// export {
//   cube as default, multi, pow, sum, sub, sqrt,
// };



// import cube from './numbers1.js';
// import {pow,sum,sub} from './numbers2.js';
// import multi from './numbers2.js';
// import sqrt from'./numbers3.js';

// export default cube;
// export {pow};
// export   {sum};
//   export {sub};
//  export  {multi};
// export   {sqrt};
// END