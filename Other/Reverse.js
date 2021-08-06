const revers2 = str2 => {
  let revStr2 = '';
  for (i = str2.length - 1; i >= 0; i--) {
    revStr2 += str2[i];

  }
  return revStr2
}

// С методами 
const revers3 = (str) => {
  return str
  .toLowerCase()
  .split('')
  .reverse()
  .join('')
}


// 
const revers = (str) => {
  let i = str.length - 1;
  let rev = '';
  while (i >= 0) {
    rev += str[i]
    i--
  }
  return rev
}

console.log(revers('perevorot'));
console.log(revers2('Максим'));
console.log(revers3('Максим'));
