/*
нужно найти точку, находящуюся между двумя другими точками ровно посередине
 (ещё говорят, что нужно найти середину отрезка). Такая точка вычисляется через 
 поиск среднего арифметического каждой из координат. То есть координата x "срединной"
  точки равна (x1 + x2) / 2, а координата y — (y1 + y2) / 2.
*/

const getMiddlePoint = (p1, p2) => {
    const x = (p1[0] + p2[0]) / 2;
    const y = (p1[1] + p2[1]) / 2;
  
    return [x, y];
  };
  
  const point1 = [2, 3];
  const point2 = [-4, 0];
  
  console.log(getMiddlePoint(point1, point2)); // => [-1, 1.5]


 // BEGIN
const getMidPoint = (point1, point2) => {
    const x = (point1.x + point2.x) / 2;
    const y = (point1.y + point2.y) / 2;
  
    return { x, y };
  };
  // END
  const point3 = { x: 0, y: 0 };
  const point4 = { x: 4, y: 4 };
  const point5 = getMidPoint(point3, point4);
  console.log(point5); // => { x: 2, y: 2 };

 /* В свою очередь, точки объединяются в отрезки. Каждый отрезок задаётся парой точек, 
 одна из которых — начало, другая — конец отрезка. Отрезок в коде можно представить
  аналогично точке — массивом из двух элементов, в котором каждый элемент — точка.
 */

// const point1 = [3, 4];
// const point2 = [-8, 10];
// const segment = [point1, point2];