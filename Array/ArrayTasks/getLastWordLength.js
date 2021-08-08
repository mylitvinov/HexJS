// Реализуйте и экспортируйте по умолчанию функцию, которая возвращает длину 
// последнего слова переданной на вход строки. Словом считается любая последовательность,
//  не содержащая пробелов.
const getLastWordLength = (str) => {
    if(!str.length) return 0;                // убираем лишние пробелы в начале и конце   
    const strToArr = str.trim().split(' '); // и преобразуем в массив
    return strToArr[strToArr.length -1].length; // находим дилну последнего индекса массива
}


 console.log(getLastWordLength('')); // 0
 
console.log(getLastWordLength('man in BlacK')); // 5
 
console.log(getLastWordLength('hello, world!  ')); // 6


// export default (str) => {
//     const words = str.trim().split(' ');
//     const lastWord = words[words.length - 1];
//     return lastWord.length;
//   };