/*
  Реализуйте функцию summaryRanges, которая находит в массиве
  непрерывные возрастающие последовательности чисел и возвращает массив с их перечислением.
  Примеры
  summaryRanges([]); // []
  summaryRanges([1]); // []
  summaryRanges([1, 2, 3]); // ['1->3']
  summaryRanges([0, 1, 2, 4, 5, 7]); // ['0->2', '4->5']
  summaryRanges([110, 111, 112, 111, -5, -4, -2, -3, -4, -5]); // ['110->112', '-5->-4']
*/

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
const searchLinearSequences = (subSequencesColl) => {
    const linearSubSequences = []; // здесь копим найденные арифметические прогрессии (с шагом 1). *
    for (const currSubSequence of subSequencesColl) {
      /* если длина подпоследовательности > 2, значит это арифметическая прогрессия. */
      if (currSubSequence.length >= 2) {
        linearSubSequences.push(currSubSequence);
      }
    }
    return linearSubSequences;
  };
  
  const prepareForDisplay = (subSeqColl) => {
    const resColl = [];
    for (const subSeq of subSeqColl) {
      /* отбразить необходимо только 1й и последний элемент арифметической прогрессии. */
      const str = `${subSeq[0]}->${subSeq[subSeq.length - 1]}`;
      /* запоминаем отформатированную арифметическую прогрессию. */
      resColl.push(str);
    }
    return resColl;
  };
  
  const summaryRanges = (sequence) => {
    let acc = []; // сюда копим текущую последовательность
    /* subSequencesColl - запоминаеn все подпоследовательности, даже если она из одного числа. */
    const subSequencesColl = [];
    /* проверяем каждое число из полученной последовательности. */
    for (let i = 0; i < sequence.length; i += 1) {
      /* проверяем образует ли текущий элемент вместе со следующим арифм. прогрессию (с шагом 1). */
      if ((sequence[i] + 1) === sequence[i + 1]) {
        acc.push(sequence[i]); // если да, то копим текущую последовательность дальше.
      } else { // если арифметическая прогрессия (с шагом 1) нарушена, то
        acc.push(sequence[i]); // докладываем в аккум. текущее число
        subSequencesColl.push(acc); // затем запоминаем текущую последовательность
        /* если это еще не конец полученной послед-ти значит далее могут находится еще послед-ти. */
        if (i < sequence.length) {
          acc = []; // поэтому необходимо обнулить аккум.
        }
      }
    }
    /* затем вычленяем арифметические прогрессии (с шагом 1). */
    const linearSubSequences = searchLinearSequences(subSequencesColl);
    /* отбражаем арифметические прогрессии в удобном формате для вывода на экран. */
    return prepareForDisplay(linearSubSequences);
  };
  
  /* testing */
  console.log(summaryRanges([])); // []
  console.log(summaryRanges([1])); // []
  console.log(summaryRanges([1, 2, 3])); // ['1->3']
  console.log(summaryRanges([0, 1, 2, 4, 5, 7])); // ['0->2', '4->5']
  console.log(summaryRanges([110, 111, 112, 111, -5, -4, -2, -3, -4, -5])); // ['110->112', '-5->-4']


//   const getRangeOfSequence = (sequence) => {
//     const first = sequence[0];
//     const last = sequence[sequence.length - 1];
//     return `${first}->${last}`;
//   };
  
//   const summaryRanges = (numbers) => {
//     const ranges = [];
//     let sequence = [];
  
//     for (let index = 0; index < numbers.length; index += 1) {
//       const current = numbers[index];
//       const next = numbers[index + 1];
//       sequence.push(current);
//       if (current + 1 !== next) {
//         if (sequence.length > 1) {
//           const range = getRangeOfSequence(sequence);
//           ranges.push(range);
//         }
//         sequence = [];
//       }
//     }
  
//     return ranges;
//   };




//   const showlinSubSequences = (sequencesColl) => {
//     if (sequencesColl.length < 1 || sequencesColl[0].length < 2) {
//       return '[]';
//     }
//     // console.log(sequencesColl);
//     let linSeqRes = '';
//     for (const subSequence of sequencesColl) {
//       if (subSequence.length >= 2) {
//         linSeqRes += `['${subSequence[0]}->${subSequence[subSequence.length - 1]}']`
//       }
//     }
//     return linSeqRes;
//   };
  
//   const summaryRanges = (sequence) => {
//     let acc = []; // linearSubSequence
//     const subSequencesColl = [];
//     for (let i = 0; i < sequence.length; i += 1) {
//       if ((sequence[i] + 1) === sequence[i + 1]) {
//         acc.push(sequence[i]);
//       } else {
//         acc.push(sequence[i]);
//         subSequencesColl.push(acc);
//         if (i < sequence.length) {
//           acc = [];
//         }
//       }
//     }
//     const resString =  showlinSubSequences(subSequencesColl);
//     return resString;
//   };