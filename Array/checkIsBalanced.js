// Необходимо реализовать функцию, которая проверяет, что парные скобки сбалансированы. 
// То есть каждая открывающая скобка имеет закрывающую: (), ((()())).
//  А вот пример несбалансированных скобок: (, ((), )(. Для проверки баланса недостаточно
//  считать количество, важен так же порядок в котором они идут.

const checkIsBalanced = (expression) => {
    // Инициализация стека
    const stack = [];
    // Проходим по каждому символу в строке 
    for (const symbol of expression) {
      // Смотрим открывающий или закрывающий
      if (symbol === '(') {
        stack.push(symbol);
      } else if (symbol === ')') {
        // Если для закрывающего не нашлось открывающего, значит баланса нет
        if (!stack.pop()) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  };
  
console.log(checkIsBalanced('((()())'))
