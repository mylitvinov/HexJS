Используя telnet выполните запрос к hexlet.local (расположен на localhost) на порт 8080. Параметры запроса: глагол POST, страница /upload, протокол HTTP 1.1, тело: my request body. Не забудьте установить заголовки необходимые для отправки body;
Запишите ваш HTTP-запрос в файл solution;

telnet localhost 8080

POST /upload HTTP/1.1
Host: hexlet.local
Content-Length: 15
Content-Type: text/plain

my request body


/usr/src/app$ telnet localhost 8080
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
POST /upload HTTP/1.1
HOST:hexlet.local
Content-Type: text/plain
Content-Length: 15
Connection: close

my request body
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 15
ETag: W/"f-9NKAi8j1k+uVfNqf0hA8aT5zScw"
Date: Sat, 28 Aug 2021 14:16:58 GMT
Connection: close

my request bodyConnection closed by foreign host.

