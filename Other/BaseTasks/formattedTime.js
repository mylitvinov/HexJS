// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
//  количество минут (прошедших с начала суток) и возвращает строку, являющуюся временем 
//  в формате чч:мм. Если количество минут содержит больше 24 часов (1 суток), 
//  то функция возвращает время, прошедшее с полуночи последних суток.

// Длинный вариант
const formattedTime1 = (min) => {
    let timeResult = '';
    const toDate = (hour, newMin) => {
        timeResult =
            hour < 10 && newMin < 10 ?
                '0' + hour + ':' + '0' + newMin
                : hour >= 10 && newMin < 10 ?
                    hour + ':' + '0' + newMin
                    : hour < 10 && newMin >= 10 ?
                        '0' + hour + ':' + newMin
                        : hour + ':' + newMin;
    }

    if (min >= 0 && min < 60) {
        const hour = 0;
        const newMin = min;
        toDate(hour, newMin);
    } else if (min >= 60 && min <= 60 * 24) {
        const hour = Math.floor(min / 60);
        const newMin = min - hour * 60;
        toDate(hour, newMin);
    } else if (min > 60 * 24) {
        const hour = Math.floor((min / 60) % 24);
        const newMin = min - 60 * hour - 60 * 24;
        toDate(hour, newMin);
    }
    return timeResult;
}



// formattedTime(5);


// Короткое решение
const formattedTime = (rawMinutes) => {
    const hours = Math.floor((rawMinutes / 60) % 24);
    const formattedHours = hours >= 10 ? hours : `0${hours}`;
  
    const minutes = rawMinutes % 60;
    const formattedMinutes = minutes >= 10 ? minutes : `0${minutes}`;
  
    return `${formattedHours}:${formattedMinutes}`;
  };

  console.log(formattedTime(5));
console.log(formattedTime(15));
console.log(formattedTime(60));
console.log(formattedTime(67));
console.log(formattedTime(175));
console.log(formattedTime(600));
console.log(formattedTime(754));
console.log(formattedTime(1504));