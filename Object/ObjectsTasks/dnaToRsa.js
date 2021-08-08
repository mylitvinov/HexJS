/* 
  ДНК и РНК это последовательности нуклеотидов.
  Четыре нуклеотида в ДНК это аденин (A), цитозин (C), гуанин (G) и тимин (T).
  Четыре нуклеотида в РНК это аденин (A), цитозин (C), гуанин (G) и урацил (U).
  Цепь РНК составляется на основе цепи ДНК последовательной заменой каждого нуклеотида:
  G -> C
  C -> G
  T -> A
  A -> U
  Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход цепь ДНК
  и возвращает соответствующую цепь РНК (совершает транскрипцию РНК).
  Если во входном параметре нет ни одного нуклеотида (т.е. передана пустая строка),
  то функция должна вернуть пустую строку. Если в переданной цепи ДНК встретится
  "незнакомый" нуклеотид (не являющийся одним из четырех перечисленных выше),
  то функция должна вернуть null.
  dnaToRna('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'
  dnaToRna('CCGTA'); // 'GGCAU'
  dnaToRna(''); // ''
  dnaToRna('ACNTG'); // null
*/

const map = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  };
  
  const dnaToRna = (dna) => {
      if(!dna.length) return '';
      const result = [];
      for (const el of dna) {
          if(!map[el]) return null;
          result.push(map[el])
      }
      return result.join('')
  }

  
  /* testing */
  console.log(dnaToRna('ACGTGGTCTTAA')); // toBe('UGCACCAGAAUU');
  console.log(dnaToRna('CCGTA')); // toBe('GGCAU');
  console.log(dnaToRna('')); // toBe('');
  console.log(dnaToRna('ACNTG')); // toBeNull();

  // export default (dna) => {
  //   const rna = [];
  
  //   for (const nucleotide of dna) {
  //     if (!_.has(map, nucleotide)) {
  //       return null;
  //     }
  
  //     rna.push(map[nucleotide]);
  //   }
  
  //   return rna.join('');
  // };
  // // END