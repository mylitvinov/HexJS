/*В JavaScript функции это объекты первого рода, то есть они ведут себя как данные: 
их можно записывать в переменные или константы. Свойства объектов подобны переменным,
 а значит в них можно сохранить функции:
*/
const company = { name: 'Hexlet' };
// Создание функции, которая сразу же присваивается свойству getName и становится методом
company.getName = () => 'Hexlet'; // Функция возвращает строку "Hexlet"

// Вызов метода
company.getName(); // "Hexlet"

/*Это всего лишь один из множества возможных вариантов добавления функции в объект. 
Ниже еще несколько примеров:
*/
// При создании объекта
const obj = {
  getName: () => 'Hexlet',
};

// Через присваивание константы
const company = { name: 'Hexlet' };
// Имя константы не принципиально
const getHexlet = () => 'Hexlet';
company.getName = getHexlet; 

// Кстати никто не мешает вызывать функцию напрямую без объекта
getHexlet();
// Или даже так
const getName = company.getName;
getName(); // "Hexlet";


const company = { name: 'Hexlet', employees: [] };
// Методы, извлекающие данные из объекта называются геттерами
// Поэкспериментируйте со стрелочной функцией, убедитесь, что она работает по-другому
company.getName = function getName() {
  return this.name;
};

// Обязательно потренируйтесь на repl.it
company.getName(); // Hexlet

company.name = 'Hexlet Plus';
company.getName(); // Hexlet Plus

// Методы меняющие данные объекта называют сеттерами
company.setName = function setName(name) {
    this.name = name;
  };
  
  // Добавление нового сотрудника
  company.addEmployee = function addEmployee(user) {
    // Важно, что на момент вызова, employees уже добавлен в company
    this.employees.push(user);
  };
  
  // Обязательно потренируйтесь на repl.it
  company.getName(); // Hexlet
  
  company.setName('Hexlet Plus');
  company.getName(); // Hexlet Plus
  
  const user = { name: 'Petya' };
  company.addEmployee(user);
  company.employees; // [{ name: 'Petya' }]

  /*Call()Дело в том, что первым параметром эта функция принимает контекст - объект,
   на который и будет ссылаться this внутри функции (и для этого ей не обязательно 
    быть методом):
*/
const getName = function getName() {
  return this.name;
};

const company1 = { name: 'Hexlet' };
getName.call(company1); // "Hexlet"

const company2 = { name: 'Hexlet Plus' };
getName.call(company2); // "Hexlet Plus"

/*В этом и заключается весь секрет this. Это контекст, который JavaScript прокидывает 
автоматически в функцию, если она вызывается как метод. В этом случае можно точно 
сказать, к какому объекту она принадлежит.
*/

const company = {
  name: 'Hexlet',
  country: {
    name: 'Finland',
    getName: function getName() {
      return this.name;
    }
  },
};

console.log(company.country.getName()); // => ? 'Finland'

// Правильный ответ: "Finland". Почему? Потому что контекстом для метода getName()
//  является объект country, а не company. Если немного модифицировать код, то понять 
//  эту идею станет проще:

const { country } = company;
console.log(country.getName()); // "Finland"

/*Из-за необходимости использовать обычные функции при создании объектов в JavaScript
 был введен специальный сокращенный синтаксис создания методов при определении объектов:
*/
const company = {
  name: 'Hexlet',
  getName() {
    return this.name;
  },
};
/*Такой способ – всего лишь "синтсический сахар". Он позволяет сделать запись чуть
 короче, но не более того. Главное запомните – это обычная функция, а не стрелочная. 
 В дальнейшем мы будем использовать именно такое определение.
*/