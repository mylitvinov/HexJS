Используя telnet выполните запрос к hexlet.local (расположен на localhost) на порт 8080. Передайте в строке запроса следующие параметры: key равный value и another_key равный another_value. Параметры запроса: глагол GET, страница /, протокол HTTP 1.1;
Запишите ваш HTTP-запрос в файл solution;

telnet localhost 8080

GET /?key=value&another_key=another_value HTTP/1.1
Host: hexlet.local