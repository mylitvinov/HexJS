const factorial = (n) => {
    let counter = 1;
    let result  = 1;
  
    while (counter <= n) {
      result = result * counter;
      counter = counter + 1;
    }
  
    return result;
  }

  console.log(factorial(5))


  // С помощью рекурсии
  
  const recursiveFactorial = (n) => {
    if (n === 1) {
      return 1;
    }
    return n * recursiveFactorial(n-1);
  }