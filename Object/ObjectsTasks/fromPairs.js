/* fРеализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив, 
состоящий из массивов-пар и возвращает объект, полученный из этих пар.
Примечания
Если при конструировании объекта попадаются совпадающие ключи, то берётся значение 
из последнего массива-пары:
*/
const fromPairs = (arr) => {
    let result = {};
    for (let [key, value] of arr) {
      result[key] = value;
    }
    return result;
  };
  
  export default fromPairs;
  
  /////// TESTS
  console.log(
    fromPairs([
      ["fred", 30],
      ["barney", 40],
    ])
  ); //  { fred: 30, barney: 40 }
  
  console.log(
    fromPairs([
      ["cat", 5],
      ["dog", 6],
      ["bird", 10],
    ])
  ); // { cat: 5, dog: 6, bird: 10 }
  
  console.log(
    fromPairs([
      ["cat", 5],
      ["dog", 6],
      ["cat", 11],
    ])
  ); // { cat: 11, dog: 6 }