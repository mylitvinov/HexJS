// Рассмотрим пример. Реализуем функцию findKeys(), которая возвращает список ключей
//  объекта, значение которых равно переданному значению:

const lessonMembers = {
  syntax: 3,
  using: 2,
  foreach: 10,
  operations: 10,
  destructuring: 2,
  array: 2,
};

// Логика работы функции выглядит так:

// Обходим свойства объекта
// Если значение в свойстве совпадает с переданным, то добавляем ключ в результат
const findKeys = (obj, expectedValue) => {
  const result = [];

  const entries = Object.entries(obj);
  for (const [key, value] of entries) {
    if (value === expectedValue) {
      result.push(key);
    }
  }

  return result;
};
console.log(findKeys(lessonMembers, 10)); // ['foreach', 'operations']
console.log(findKeys(lessonMembers, 3));  // ['syntax']
