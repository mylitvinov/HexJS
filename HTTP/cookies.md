Используя telnet выполните запрос к hexlet.local (расположен на localhost) на порт 8080. Параметры запроса: глагол GET, страница /account, протокол HTTP 1.1, куки name со значением user и secret со значением secret_hash;
Запишите ваш HTTP-запрос в файл solution;

telnet localhost 8080

GET /account HTTP/1.1
Host: hexlet.local
Cookie: name=user; secret=secret_hash


/usr/src/app$ telnet localhost 8080
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
GET /account HTTP/1.1
Host: hexlet.local
Cookie: name=user; secret=secret_hash

HTTP/1.1 200 OK
X-Powered-By: Express
Connection: close
Date: Sat, 28 Aug 2021 16:42:45 GMT
Content-Length: 0

Connection closed by foreign host.