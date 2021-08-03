// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, 
// состоящую только из открывающих и закрывающих скобок разных типов, и проверяет,
// является ли эта строка сбалансированной. Открывающие и закрывающие скобки должны быть
//  одного вида. Пустая строка (отсутствие скобок) считается сбалансированной.


const isBracketStructureBalanced = (str) => {
    const stack = [];
    const arr = [')', ']', '}', '>'];
    const brackets = {
        ')': '(',
        ']': '[',
        '}': '{',
        '>': '<',
    };
    const isClosedBracket = (simbol) => {
        return arr.indexOf(simbol) > -1;
    }

    for (let i = 0; i < str.length; i++) {
        if (isClosedBracket(str[i])) {
            if (brackets[str[i]] !== stack.pop()) return false;
        } else stack.push(str[i]);
    }
    return stack.length === 0;
}

console.log(isBracketStructureBalanced('(>'));  // false
console.log(isBracketStructureBalanced('()'));  // true
console.log(isBracketStructureBalanced('[()]'));  // true
console.log(isBracketStructureBalanced('{<>}}')); // false

// const openingSymbols = ['(', '[', '{', '<'];
// const closingSymbols = [')', ']', '}', '>'];

// const isOpeningSymbol = (symbol) => openingSymbols.includes(symbol);
// const getClosingSymbolFor = (symbol) => closingSymbols[openingSymbols.indexOf(symbol)];

// export default (str) => {
//   const stack = [];
//   for (const symbol of str) {
//     if (isOpeningSymbol(symbol)) {
//       const closingSymbol = getClosingSymbolFor(symbol);
//       stack.push(closingSymbol);
//     } else {
//       const lastSavedSymbol = stack.pop();
//       if (symbol !== lastSavedSymbol) {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// };