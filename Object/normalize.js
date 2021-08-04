import _ from 'lodash';
// Реализуйте и экспортируйте по умолчанию функцию, которая "нормализует" данные
//  переданного урока. То есть приводит их к определенному виду.

// На вход этой функции подается объект, описывающий собой урок курса. В уроке содержатся
//  два поля: имя и описание.


// Имя капитализируется. То есть первый символ имени становится заглавным, остальные маленькими.
// Весь текст описания приводится к нижнему регистру

const lesson = {
    name: 'ДеструКТУРИЗАЦИЯ',
    description: 'каК удивитЬ колек',
  };

  export default (lesson) => {
    lesson.name = _.capitalize(lesson.name);
    lesson.description = lesson.description.toLowerCase();
  }

  // const normalize = (obj) => {
  //   const [name, description] = Object.keys(obj);
  //    obj[name] = _.capitalize(obj[name]);
  //   obj[description] = obj[description].toLowerCase();
    
  // }

 
console.log(normalize(lesson));

