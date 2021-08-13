/*В интернете одни сайты часто ссылаются на другие сайты. Это одна из фундаментальных
 концепций в интернете называмая гипертекст. Однако существует проблема, ссылаясь на 
 другие сайты мы не можем гарантировать их работоспособности. В процессе жизни может
  произойти такое, что страница окажется недоступна, либо сайт начнет постоянно выдавать 
  ошибку. Это довольно серьезная проблема и существуют даже специальные сервисы, которые 
  помогают находить "битые" страницы.

Одним из таких сервисов пользуется и сам Хекслет

checker.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход ссылку на 
страницу какого-то сайта, загружает содержимое этой страницы, извлекает из него ссылки
 и проверяет их доступность. Функция должна вернуть список битых ссылок.

import getBadLinks from '../checker.js';
 */
const url = 'https://privet.hexlet';
const links = await getBadLinks(url);
console.log(links);
// Гипотетический пример:
// [
//   'https://privet.hexlet/somepage',
//   'https://privet.hexlet/another/page',
// ]

/*Проверка доступности:

Любые ссылки возвращающие коды ответа кроме 2xx (любые двухсотые) считаются битыми. 
Axios по умолчанию считает ошибочными все коды кроме 2xx и отправляет их в блок catch().
 То есть если запрос axios.get() отработал без ошибок, то страница отдает 2xx код ответа,
  если завершился с ошибкой, то ответа либо нет, либо это не 2xx код. Такие ссылки
   считаются битыми.

Подсказки
Для извлечения ссылок со страницы воспользуйтесь функцией extractLinks(content)
*/

const extractLinks = (content) => {
  const host = 'http://localhost:8080';
  const linkRx = /href="(.+?)"/ig;
  const results = content.matchAll(linkRx);
  return Array.from(results).map((r) => r[1])
    .map((rawLink) => new URL(rawLink, host).toString());
};

// BEGIN (write your solution here)
export default async (initialLink) => {
  const response = await axios.get(initialLink);
  const links = extractLinks(response.data);
  const request = (link) => axios.get(link).then(() => null).catch(() => link);
  const promises = links.map(request);
  const results = await Promise.all(promises);
  return results.filter((result) => result !== null);
};
// END