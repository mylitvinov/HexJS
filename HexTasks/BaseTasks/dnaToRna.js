// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход цепь ДНК и
//  возвращает соответствующую цепь РНК (совершает транскрипцию РНК).

// Если во входном параметре нет ни одного нуклеотида (т.е. передана пустая строка), 
// то функция должна вернуть пустую строку. Если в переданной цепи ДНК встретится "незнакомый" 
// нуклеотид (не являющийся одним из четырех перечисленных выше), то функция должна вернуть null.
//Цепь РНК составляется на основе цепи ДНК последовательной заменой каждого нуклеотида:

// G -> C
// C -> G
// T -> A
// A -> U

// const dnaToRna = (dna) => {
//     let rna = '';

//     if (dna.length === 0) return '';
//     for (i = 0; i < dna.length; i++) {
//         dna[i] == 'G' ?
//             rna += 'C'
//             : dna[i] == 'C' ?
//                 rna += 'G'
//                 : dna[i] == 'T' ?
//                     rna += 'A'
//                     : dna[i] == 'A' ?
//                         rna += 'U'
//                         : null

//     }
//     return rna
// }


const dnaToRna = (dna) => {
    let rna = '';

    if (dna.length === 0) return '';

    for (let i = 0; i < dna.length; i++) {

        switch (dna[i]) {
            case 'G':
                rna += 'C';
                break;
            case 'C':
                rna += 'G';
                break;
            case 'T':
                rna += 'A';
                break;
            case 'A':
                rna += 'U';
                break;
            default:
                rna = null;
                break;
        }

    }
    return rna.includes('null') ? null : rna;
}

console.log(dnaToRna('ACGTGGTCTTAA')); // 'UGCACCAGAAUU'
console.log(dnaToRna('CCGTA')); // 'GGCAU'
console.log(dnaToRna('')); // ''
console.log(dnaToRna('ACNTG')); // null

// Попроще вариант
// export default (n) => {
//     let rna = '';
//     for (let i = 0; i < n.length; i += 1) {
//       switch (n[i]) {
//         case 'G':
//           rna += 'C';
//           break;
//         case 'C':
//           rna += 'G';
//           break;
//         case 'T':
//           rna += 'A';
//           break;
//         case 'A':
//           rna += 'U';
//           break;
//         default:
//           return null;
//       }
//     }
  
//     return rna;
//   };