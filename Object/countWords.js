// Реализуйте и экспортируйте по умолчанию функцию, которая считает количество слов в
//  предложении, и возвращает объект. В объекте свойства — это слова (приведенные к 
//     нижнему регистру), а значения — это то, сколько раз слово встретилось в предложении.
//      Слова в предложении могут находиться в разных регистрах. Перед подсчетом их нужно приводить
//       в нижний регистр, чтобы не пропускались дубли.
const countWords = (str) => {
    if (!str) return {};
    const words = str.split(' ');
    const result = {};
    for (let word of words) {
        word = word.toLowerCase();
        result.hasOwnProperty(word) ?
            result[word] += 1
            : result[word] = 1
    }
    return result

}



// Если предложение пустое, то возвращается пустой объект 
console.log(countWords(''));
// {}

const text1 = 'one two three two ONE one wow';
console.log(countWords(text1));
// {
//   one: 3,
//   two: 2,
//   three: 1,
//   wow: 1,
// }

const text2 = 'another one sentence with strange Words words';
console.log(countWords(text2));
// {
//   another: 1,
//   one: 1,
//   sentence: 1,
//   with: 1,
//   strange: 1,
//   words: 2,
// }


// import _ from 'lodash';

// // BEGIN
// export default (sentence) => {
//   const words = _.words(sentence);
//   const result = {};
//   for (const word of words) {
//     const lowerWord = word.toLowerCase();
//     result[lowerWord] = (result[lowerWord] ?? 0) + 1;
//   }

//   return result;
// };