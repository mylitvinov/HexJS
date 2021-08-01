const myFunc = str => {
    let strToArr = str.split(' ');
    return strToArr.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');

  
  
}

// 2 вариант 
const solution = (str) => {
let strNew = '';
for (let i = 0; i <= str.length - 1; i+=1 ) {
  if (str[i] !== ' ' && (str[i-1] == ' ' || i == 0)) {
   strNew += str[i].toUpperCase(); 
  } else strNew += str[i];
}
return strNew;
};

console.log(myFunc('hello, world my dear friend!'))
console.log(solution('hello, world my dear friend!'))