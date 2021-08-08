const users = [
    { name: 'Igor', age: 19 },
    { name: 'Danil', age: 1 },
    { name: 'Vovan', age: 4 },
    { name: 'Matvey', age: 16 },
  ];
  
  // Функция принимает на вход сравниваемые элементы массива
  const compare = (a, b) => {
    if (a.age === b.age) {
      return 0;
    }
     return a.age > b.age ? 1 : -1;
  };
  
  users.sort(compare);
  
  console.log(users);
  // => [ { name: 'Danil', age: 1 },
  //      { name: 'Vovan', age: 4 },
  //      { name: 'Matvey', age: 16 },
  //      { name: 'Igor', age: 19 } ]


  users.sort((a, b) => {
    if (a.age === b.age) {
      return 0;
    }
    return a.age > b.age ? 1 : -1;
  });
  
  // То же самое, но используя функцию Math.sign
  users.sort((a, b) => Math.sign(a.age - b.age));


  users
  .filter((user) => user.age >= 16)
  .map((user) => `${user.name} is ${user.age} years old`)
  .join('\n');
// => Igor is 19 years old
//    Matvey is 16 years 


//Рандомный порядок в массиве:
var myarray=[25, 8, "George", "John"]
  myarray.sort(function(){ 
    return 0.5 - Math.random()
}) 
//Теперь элементы перемешаны


