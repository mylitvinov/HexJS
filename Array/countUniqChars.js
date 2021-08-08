// Реализуйте и экспортируйте по умолчанию функцию, которая получает на вход строку 
// и считает, сколько символов (без учёта повторяющихся символов) использовано в этой строке.
//  Например, в строке yy используется всего один символ — y. А в строке 111yya! —
//   используется четыре символа: 1, y, a и !.

const countUniqChars = (str) => {
    const arr = [];
    const strToArr = str.split('');
    for (const el of strToArr) {
        if (!arr.includes(el)) {
            arr.push(el);
        }
    }
    return arr.length
}


const text1 = 'yyab'; // y, a, b
console.log(countUniqChars(text1)); // 3

const text2 = 'You know nothing Jon Snow';
console.log(countUniqChars(text2)); // 13

// Если передана пустая строка, то функция должна вернуть `0`
const text3 = '';
console.log(countUniqChars(text3)); // 0