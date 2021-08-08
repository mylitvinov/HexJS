const smallestDivisor = (num) => {
    // BEGIN (write your solution here)
    const iter = (acc) => {
      // We use 'num / 2' in the condition below, and not 'num'.
      // This is a simple optimization: a number cannot be divided
      // by a number larger than its half.
      if (acc > num / 2) {
        return num;
      }
      if (num % acc === 0) {
        return acc;
      }
      return iter(acc + 1);
    };
    return iter(2);
    // END
  };
  
  console.log (smallestDivisor(15))