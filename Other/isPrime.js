
const isPrime = num => {
    if(num <= 1) return false;
     
     for (let i = 2; i < num; i++) {
         if (num % i == 0) return false;
     }
     return true;
   }

   // Решение учителя

   const isPrime = (number) => {
    if (number < 2) {
      return false;
    }
  
    for (let i = 2; i <= number / 2; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  };
