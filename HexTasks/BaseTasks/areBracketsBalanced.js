// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, 
// состоящую только из открывающих и закрывающих круглых скобок, и проверяет,
//  является ли эта строка корректной. Пустая строка (отсутствие скобок) считается 
//  корректной.

// Строка считается корректной (сбалансированной), если содержащаяся в ней скобочная 
// структура соответствует требованиям:

// Скобки — это парные структуры. У каждой открывающей скобки должна быть 
// соответствующая ей закрывающая скобка.
// Закрывающая скобка не должна идти впереди открывающей.


const areBracketsBalanced = (str) => {
    const stack = [];

    for (const simbol of str) {
        if(simbol === '(') stack.push(simbol);
        else if(!stack.pop()) return false;
        }
   return stack.length === 0;
}


console.log(areBracketsBalanced('(())'));  // true
console.log(areBracketsBalanced('(((((((()))))))))))')); // false


// export default (str) => {
//     let acc = 0;
//     for (let i = 0; i < str.length; i += 1) {
//       const symbol = str[i];
//       acc = symbol === '(' ? acc + 1 : acc - 1;
//       if (acc < 0) {
//         return false;
//       }
//     }
//     return acc === 0;
//   };