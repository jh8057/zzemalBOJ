const inputs = Number(
  require("fs").readFileSync("../../input/2839.txt").toString().trim()
);

let count5 = 0;
let count3 = 0;

let div = parseInt(inputs / 5);
count5 += div;

let extra = inputs % 5;

while (count5 >= 0) {
  if (extra === 0) {
    console.log(count5 + count3);
    return;
  }

  if (extra >= 3) {
    count3 += parseInt(extra / 3);
    extra = extra % 3;
  } else if (extra < 3) {
    count5--;
    extra += 5;
  }
}

if (count5 > -1 && extra === 0) console.log(count3);
console.log(-1);

// 참고
// let rest = +input;
// let result = 0;

// if (rest % 5 == 0) {
//   result += rest / 5;
//   rest = 0;
// } else {
//   while (rest > 0) {
//     if (rest % 5 != 0) {
//       rest -= 3;
//       result++;
//     } else {
//       result += rest / 5;
//       rest = 0;
//     }
//   }
// }
// console.log(rest ? -1 : result);

// while(true){
//     if(input % 5 === 0){
//         console.log(input / 5 + bags)
//         break
//     }else if(input < 0){
//         console.log(-1)
//         break
//     }else{
//         bags++
//         input -= 3
//     }
// }
