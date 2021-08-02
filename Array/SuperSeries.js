// Реализуйте и экспортируйте по умолчанию функцию, которая находит команду победителя
//  для конкретной суперсерии. Победитель определяется как команда, у которой больше побед
//   (не количество забитых шайб) в конкретной серии. Функция принимает на вход массив, 
//   в котором каждый элемент — это массив, описывающий счет в конкретной игре
//    (сколько шайб забила Канада и СССР). 
//    Результат функции – название страны: 'canada', 'ussr'.
//     Если суперсерия закончилась в ничью, то нужно вернуть null.


const getSuperSeriesWinner = (scores) => {
    let scoreCan = 0;
    let scoreRus = 0;

    for (const score of scores) {
        score[0] > score[1] ?
            scoreCan += 1
            : score[0] < score[1] ?
                scoreRus += 1
                : scoreCan += 0, scoreRus += 0
    }

    return scoreCan > scoreRus ?
        'canada'
        : scoreCan < scoreRus ?
            'ussr'
            : null
}


// Первое число – сколько забила Канада
// Второе число – сколько забила СССР
const scores = [
    [3, 7], // Первая игра
    [4, 1], // Вторая игра
    [4, 4],
    [3, 5],
    [4, 5],
    [3, 2],
    [4, 3],
    [6, 7],
];

console.log(getSuperSeriesWinner(scores)); // 'ussr'

// export default (scores) => {
//     let result = 0;
//     for (const score of scores) {
//       result += Math.sign(score[0] - score[1]);
//     }
  
//     if (result > 0) {
//       return 'canada';
//     }
//     if (result < 0) {
//       return 'ussr';
//     }
  
//     return null;
//   };