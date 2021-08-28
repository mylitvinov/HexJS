Используя telnet выполните запрос к hexlet.local (расположен на localhost) на порт 8080.
Параметры запроса: глагол POST, страница /session/new, протокол HTTP 1.1;
Запишите ваш HTTP-запрос в файл solution;

telnet localhost 8080

POST /session/new HTTP/1.1
Host: hexlet.local

/usr/src/app$ telnet localhost 8080
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
POST /session/new HTTP/1.1
Host: hexlet.local

HTTP/1.1 302 Found
X-Powered-By: Express
Connection: close
Location: /
Vary: Accept
Content-Type: text/plain; charset=utf-8
Content-Length: 23
Date: Sat, 28 Aug 2021 15:22:49 GMT

Found. Redirecting to /Connection closed by foreign host.