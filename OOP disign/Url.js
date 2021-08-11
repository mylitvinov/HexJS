/*В данном упражнении нам предстоит реализовать класс-обёртку над стандартным классом URL.
 Наш класс будет предоставлять другие методы и немного расширять возможности стандартного.

Url.js
Реализуйте и экспортируйте по умолчанию класс для работы с HTTP-адресом.
 Класс должен содержать конструктор и методы:

конструктор — принимает на вход HTTP-адрес в виде строки.
*/
//getScheme() — возвращает протокол передачи данных (без двоеточия).
// getHostName() — возвращает имя хоста.
// getQueryParams() — возвращает параметры запроса в виде пар ключ-значение объекта.
// getQueryParam() — получает значение параметра запроса по имени. Если параметр с переданным именем не существует, метод возвращает значение заданное вторым параметром (по умолчанию равно null).
// equals(url) — принимает объект класса Url и возвращает результат сравнения с текущим объектом — true или false.
const url = new Url('http://yandex.ru:80?key=value&key2=value2');
url.getScheme(); // 'http'
url.getHostName(); // 'yandex.ru'
url.getQueryParams();
// {
//   key: 'value',
//   key2: 'value2',
// };
url.getQueryParam('key'); // 'value'
// второй параметр - значение по умолчанию
url.getQueryParam('key2', 'lala'); // 'value2'
url.getQueryParam('new', 'ehu'); // 'ehu'
url.getQueryParam('new'); // null
url.equals(new Url('http://yandex.ru:80?key=value&key2=value2')); // true
url.equals(new Url('http://yandex.ru:80?key=value')); // false
/*Подсказки
В процессе прохождения испытания нужно будет хорошо поработать с документацией и изучить возможности стандартного класса URL. Это поможет использовать его для парсинга адреса на нужные составляющие.
Не используйте в решении устаревшие возможности, помеченные как deprecated (parse, format и другие).
Для работы с query string изучите методы класса URLSearchParams.
Для преобразования спика пар ключ-значение в объект можно использовать метод Object.fromEntries()
*/
// BEGIN (write your solution here)
import { URL } from 'url';

export default class Url {
  constructor(url) {
    this.url = new URL(url);
    this.url.scheme = this.url.protocol.slice(0, -1);
    this.url.queryParams = Object.fromEntries(this.url.searchParams);
  }

  getScheme() {
    return this.url.scheme;
  }

  getHostName() {
    return this.url.hostname;
  }

  getQueryParams() {
    return this.url.queryParams;
  }

  getQueryParam(name, defaultName = null) {
    return this.url.searchParams.has(name)
      ? this.url.searchParams.get(name)
      : defaultName;
  }

  toString() {
    return this.url.toString();
  }

  equals(url) {
    return url.toString() === this.toString();
  }
}
// END