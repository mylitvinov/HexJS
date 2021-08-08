// Генерация строки в цикле
const coll = ['milk', 'butter'];

buildHTMLList(coll);
// <ul><li>milk</li><li>butter</li></ul>

const buildHTMLList = (coll) => {
    const parts = [];
    for (const item of coll) {
      parts.push(`<li>${item}</li>`);
    }
  
    // Метод join объединяет элементы массива в строку
    // В качестве разделителя между значениями
    // используется то, что передано первым параметром
    const innerValue = parts.join('');
    const result = `<ul>${innerValue}</ul>`;
    return result;
  }

const parts = ['JavaScript', 'PHP', 'Python'];
const output = parts.join(', ');

console.log(output); // => JavaScript, PHP, Python



const parts = ['JavaScript', 'PHP', 'Python'];

 // теперь каждое слово будет начинаться с новой строки
const output = parts.join('\n');

console.log(output); // =>
// JavaScript
// PHP
// Python

const parts = [];
for (const item of coll) {
  parts.push(`<li>${item}</li>`);
}
const innerValue = parts.join('\n'); // перевод строки


// Старый способ, неэффетивен, много памяти расход

// const buildHTMLList = (coll) => {
//     let result = '<ul>';
//     for (const item of coll) {
//       result = `${result}<li>${item}</li>`;
//       // либо так: result += `<li>${item}</li>`;
//     }
//     result = `${result}</ul>`;
  
//     return result;
//   }