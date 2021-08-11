/*JavaScript долгое время не поддерживал приватных свойств и методов.
 Для них появилось соглашение об именовании с нижнего подчёркивания _, 
 чтобы предотвратить доступ ко внутренностям объекта в обход интерфейса. 
 Но сама возможность прямого доступа остаётся. Нам предстоит разработать обёртку
  над объектом, защищающую его приватные свойства от прямого доступа.

protect.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает объект и 
позволяет обращаться только к "публичным" свойствам и методам. При попытке прочитать
 или перезаписать приватное или несуществующее свойство должно выбрасываться исключение.
*/
import protect from '../protect.js';
 
class Course {
  constructor(name) {
    this._name = name;
  }
 
  getName() {
    return this._name;
  }
}
 
const course = new Course('Object-oriented design');
const protectedCourse = protect(course);
 
course.getName(); // "Object-oriented design"
protectedCourse.getName(); // "Object-oriented design"
course._name; // "Object-oriented design"
course._nonExists; // undefined
 
protectedCourse._name; // Error
protectedCourse._name = 'OOD'; // Error
protectedCourse._nonExists; // Error
// В реализации используйте Proxy.

// Подсказки
// Чтобы избежать потери контекста для методов, используйте связывание через bind.
// Определить, что по ключу возвращается метод можно через оператор typeof.
// Документация обработчика set

export default class Course {
  constructor({ name, language, created }) {
    this.language = language;
    this._name = name;
    this._created = created;
  }

  get created() {
    return this._getCreated();
  }

  getName() {
    return `${this.language}: ${this._name}`;
  }

  _getCreated() {
    return this._created;
  }

  setName(name) {
    this._name = name;
  }
}

const validateProperty = (target, name) => {
  if (!(name in target)) {
    throw new Error(`Property "${name}" doesn't exist`);
  }
  if (name.startsWith('_')) {
    throw new Error(`Property "${name}" is protected`);
  }
};

const protect = (obj) => new Proxy(obj, {
  get: (target, name) => {
    const property = target[name];
    validateProperty(target, name);

    return (typeof property === 'function') // если свойство - это метод, то необходимо привязать его
      ? property.bind(obj) // к контексту оригинального объекта, иначе метод вызовется на прокси
      : property;
  },
  set: (target, name, value) => {
    validateProperty(target, name);
    target[name] = value;

    return true;
  },
});

export default protect;