import square from './square.js';

import {getTriangleArea} from  './myMathModule.js';

import {getTrianglePerimeter } from './myMathModule.js';
// BEGIN (write your solution here)
const myFunc = (n) => {
  return n/4 * square(n);
}

export default myFunc;
// END

// console.log(myFunc(2));
// console.log(getTriangleArea(3,5))