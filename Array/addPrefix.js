// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
//  массив и строковой префикс, и возвращает новый массив, в котором к каждому элементу
//   исходного массива добавляется переданный префикс. Функция предназначена для работы 
//   со строковыми элементами. После префикса автоматически добавляется пробел.

const addPrefix = (arr, prefix) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = prefix + ' ' + arr[i];

    }
    return newArr
}

const names = ['john', 'smith', 'karl'];
const newNames = addPrefix(names, 'Mr');

console.log(newNames);
console.log(names);

 // Старый массив не меняется!
 // 2 вариант
//  export default (coll, prefix) => {
//     const result = [];
  
//     for (let i = 0; i < coll.length; i += 1) {
//       result[i] = `${prefix} ${coll[i]}`;
//     }
  
//     return result;
//   };
