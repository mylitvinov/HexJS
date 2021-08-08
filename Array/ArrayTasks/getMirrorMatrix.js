// Реализуйте и экспортируйте по умолчанию функцию, которая принимает двумерный массив (матрицу)
//  и возвращает массив, изменённый таким образом, что правая половина матрицы становится 
//  зеркальной копией левой половины, симметричной относительно вертикальной оси матрицы. 
//  Для простоты условимся, что матрица всегда имеет чётное количество столбцов и количество 
//  столбцов всегда равно количеству строк.

const copyMatrix = (matrix) => {
    const newMatrix = [];
    for (const row of matrix) {
      newMatrix.push(row.slice());
    }
    return newMatrix;
  };


  const getMirrorMatrix = (matrix) => {
    const newMatrix = copyMatrix(matrix);
    /* "условимся, что матрица всегда имеет чётное количество столбцов
    и количество столбцов всегда равно количеству строк." - поэтому
    мы можем отталкиваться от кол-ва строк в матрице, для того
    чтобы найти вертикальную ось - pivot */
    const pivot = newMatrix.length / 2;
    for (const row of newMatrix) {
      for (let i = 0; i < pivot; i += 1) {
        row[row.length - 1 - i] = row[i];
      }
    }
    return newMatrix;
  };


console.log(getMirrorMatrix([
    [11, 12, 13, 14],
    [21, 22, 23, 24],
    [31, 32, 33, 34],
    [41, 42, 43, 44],
  ]));
   
  //  [
  //     [11, 12, 12, 11],
  //     [21, 22, 22, 21],
  //     [31, 32, 32, 31],
  //     [41, 42, 42, 41],
  //  ]
  

  // teacher solution
  // const getMirrorArray = (array) => {
  //   const size = array.length;
  //   const mirrored = [];
  
  //   for (let i = 0; i < size / 2; i += 1) {
  //     mirrored[i] = array[i];
  //     mirrored[size - i - 1] = array[i];
  //   }
  
  //   return mirrored;
  // };
  
  // const getMirrorMatrix = (matrix) => {
  //   const mirroredMatrix = [];
  
  //   for (const row of matrix) {
  //     const mirroredRow = getMirrorArray(row);
  //     mirroredMatrix.push(mirroredRow);
  //   }
  
  //   return mirroredMatrix;
  // };