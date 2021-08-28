Используя telnet выполните запрос к hexlet.local (расположен на localhost) на порт 8080. Параметры запроса: метод GET, страница /, протокол HTTP 1.1;
Запишите ваш HTTP-запрос в файл solution;

telnet localhost 8080

GET / HTTP/1.1
host:hexlet.local
<!-- Connection: close -->

/usr/src/app$ telnet localhost 8080
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
GET / HTTP/1.1
host:hexlet.local

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 12
ETag: W/"c-r0WEeVxJ7IpMIG20rN7HX9ndB4c"
Date: Sat, 28 Aug 2021 13:37:42 GMT
Connection: keep-alive
Keep-Alive: timeout=5

You've done!