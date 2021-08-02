const text = 'hello hexlet';


  const capitalize = (text) =>
  (text.length === 0) ? text : `${text[0].toUpperCase()}${text.slice(1)}`;

const capitalizeWords = (sentence) => {
  const separator = ' '; // определяем разделитель — пробел
  const words = sentence.split(separator); // split разделяет строку по указанному разделителю
  // Формируем массив обработанных слов
  const capitalizedWords = [];
  for (const word of words) {
    capitalizedWords.push(capitalize(word));
  }

  // Соединяем обработанные слова обратно в предложение
  return capitalizedWords.join(separator);
};

console.log(capitalizeWords(text)); // 'Hello Hexlet';