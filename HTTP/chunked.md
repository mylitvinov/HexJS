Это задание демонстрирует работу в режиме chunked.

solution
Используя telnet выполните запрос к hexlet.local (расположен на localhost) на порт 8080. Параметры запроса: глагол GET, страница /stream, протокол HTTP 1.1;
Запишите ваш HTTP-запрос в файл solution;

telnet localhost 8080

GET /stream HTTP/1.1
Host: hexlet.local
Connection: close