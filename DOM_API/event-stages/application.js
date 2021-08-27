// @ts-check

const generateField = () => {
  const tableEl = document.createElement('table');

  tableEl.className = 'table-bordered';
  for (let i = 0; i < 3; i += 1) {
    const row = tableEl.insertRow();
    for (let j = 0; j < 3; j += 1) {
      const cell = row.insertCell();
      cell.className = 'py-2 px-3';
      cell.innerHTML = '<span class="invisible">s</span>';
    }
  }
  return tableEl;
};

// BEGIN (write your solution here)
export default () => {
  const tableEl = generateField();

  let currentSymbol = 'x';
  const switchPlayer = () => {
    currentSymbol = currentSymbol === 'x' ? 'o' : 'x';
  };

  tableEl.addEventListener('click', (e) => {
    if (e.target.textContent === 's') {
      e.target.textContent = currentSymbol;
    }
    switchPlayer();
  });

  const root = document.querySelector('.root');
  root.append(tableEl);
};
// END
