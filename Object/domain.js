// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход имя 
// сайта и возвращает информацию о нем:

const getDomainInfo = (website) => {
    let scheme = '';
    website.startsWith('https://') ?
      scheme = 'https'
    : website.startsWith('http://') ?
      scheme = 'http'
    : scheme = 'http';
    
    const name = website.replace(scheme + '://', '');
    const obj = { scheme, name };
    return obj;
  }
  
//   export default getDomainInfo;


// Если домен передан без указания протокола,
// то по умолчанию берется http
console.log(getDomainInfo('yandex.ru'))
// {
//   scheme: 'http',
//   name: 'yandex.ru',
// }
 
console.log(getDomainInfo('https://hexlet.io'));
// {
//   scheme: 'https',
//   name: 'hexlet.io',
// }
 
console.log(getDomainInfo('http://google.com'));
// {
//   scheme: 'http',
//   name: 'google.com',
// }


// export default (domain) => {
//     let scheme = '';
//     if (domain.startsWith('https://')) {
//       scheme = 'https';
//     // else if другие протоколы
//     } else {
//       scheme = 'http';
//     }
  
//     const name = domain.replace(`${scheme}://`, '');
  
//     return { scheme, name };
//   };