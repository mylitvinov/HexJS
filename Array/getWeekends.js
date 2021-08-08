// Реализуйте и экспортируйте функцию getWeekends(), которая возвращает массив из 
// двух элементов – названий выходных дней на английском. Функция принимает на вход
//  параметр – формат возврата. Всего есть два возможных значения:

// 'long' (по умолчанию) – массив содержит значения saturday и sunday
// 'short' – массив содержит значения sat и sun

// 1 вариант

// const getWeekends = (format) => {
//     if (format == 'long') {
//       return ['saturday', 'sunday'];
//     } else if(format == 'short') {
//       return  ['sat', 'sun'];
//     } else return ['saturday', 'sunday'];
//   }

// 2 вариант
const getWeekends = (format) => {
  switch (format) {
    case 'long':
     return ['saturday', 'sunday'];
      
    case 'short':
     return ['sat', 'sun'];
      
    default:
     return ['saturday', 'sunday'];;
  }

}
console.log(getWeekends("short"));