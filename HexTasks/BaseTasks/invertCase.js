
// Реализуйте и экспортируйте по умолчанию функцию, которая меняет в строке регистр 
// каждой буквы на противоположный.

const invertCase = (str) => {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        str[i] === str[i].toUpperCase() ?  newStr += str[i].toLowerCase() 
        :  newStr += str[i].toUpperCase();
    }
    return newStr 
}

console.log(invertCase('Hello, World!')); // hELLO, wORLD!
console.log(invertCase('I loVe JS'));     // i LOvE js