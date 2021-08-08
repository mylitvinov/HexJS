// Напишите функцию diff(), которая принимает два угла (integer), 
// каждый от 0 до 360, и возвращает разницу между ними.
// Угол между лучами измеряется двумя способами:

 const diff = (rad1,rad2) => {
    let dif = 0;
    const dif12 = Math.abs(rad2-rad1);
    const dif360 = 360 - dif12;
    dif12 < dif360 ? dif = dif12 : dif = dif360;
    return dif;
}

// const diff = (a, b) => {
//     const angle = Math.abs(a - b);
//     return Math.min(angle, 360 - angle);
//   };

console.log(diff(45, 0)) // === 45;         // не 315, а 45, потому что 45 меньше
console.log(diff(0, 180)) //=== 180;
console.log(diff(0, 190)) //=== 170;       // не 190, а 170, потому что 170 меньше
console.log(diff(120, 280)) //=== 160;