solution
Используя telnet авторизуйтесь на hexlet.local (расположен на localhost:8080). Параметры запроса: глагол GET, страница /admin, протокол HTTP 1.1, имя пользователя Aladdin, пароль open sesame;
Запишите ваш HTTP-запрос в файл solution;
Подсказка
Для кодирования логина и пароля используйте следующую команду в терминале: printf 'username:password' | base64

printf 'Aladdin:open sesame' | base64
QWxhZGRpbjpvcGVuIHNlc2FtZQ==

// BEGIN
telnet localhost 8080

GET /admin HTTP/1.1
Host: hexlet.local
Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==