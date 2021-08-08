// Реализуйте и экспортируйте по умолчанию функцию, которая проверяет переданное число 
// на простоту и печатает на экран yes или no.

// Примеры

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

const sayPrimeOrNot = (num) => {
    const answer = isPrime(num) ? 'yes' : 'no';
    console.log(answer);
  };
console.log(sayPrimeOrNot(5)); // 'yes'
console.log(sayPrimeOrNot(4)); // 'no'
