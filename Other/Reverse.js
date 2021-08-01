const reverse = (str) => {
    let i = str.length-1;
    let rev = '';
     while(i >= 0 ){
       rev += str[i]
       i--
     }
    return rev
  }

  console.log(reverse('perevorot'));

  // 2 способ
  const revers2 = str2 =>{
    let revStr2 = '';
    for(i=str2.length-1; i>=0; i--){
        revStr2 += str2[i];
        
    }
    return revStr2
}

console.log(revers2('Максим'));
