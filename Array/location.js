// Реализуйте и экспортируйте функцию getTheNearestLocation(), которая находит
//  ближайшее место к указанной точке на карте и возвращает его. Параметры функции:

// locations – массив мест на карте. Каждое место - это массив из двух элементов, 
// где первый элемент это название места, второй – точка на карте
//  (массив из двух чисел x и y).
// point – текущая точка на карте. Массив из двух элементов-координат x и y.

const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

  const getTheNearestLocation = (locations, currentPoint) => {
    if (locations.length === 0) {
      return null;
    }
    const distances = [];
    for (const location of locations) {
      const [name, point] = location;
      distances.push(getDistance(point, currentPoint));
    }
    const indexOfNearestLocation = distances.indexOf(Math.min(...distances));
  
    return locations[indexOfNearestLocation];
  };
// 2 вариант
//   const getTheNearestLocation = (locations, currentPoint) => {
//     if (!locations.length) return null;
//     let [nearestLocation] = locations;
//     let [nearestPlace, nearestPoint] = nearestLocation;
//     let lowestDistance = getDistance(currentPoint, nearestPoint);

//     for (let location of locations) {
//         let [place, point] = location;
//         let distance = getDistance(currentPoint, point);
//         if (distance < lowestDistance) {
//             lowestDistance = distance;
//             nearestPlace = place;
//             nearestPoint = point;
//         }
//     }
//     return [nearestPlace, nearestPoint];
// };


const locations = [
    ['Park', [10, 5]],
    ['Sea', [1, 3]],
    ['Museum', [8, 4]],
  ];
   
  const currentPoint = [5, 5];
   
  // Если точек нет, то возвращается null
 console.log(getTheNearestLocation([], currentPoint)); // null
   
  console.log(getTheNearestLocation(locations, currentPoint)); // ['Museum', [8, 4]]


  
  