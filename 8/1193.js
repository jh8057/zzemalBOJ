const input = Number(
  require("fs").readFileSync("../input/1193.txt").toString().trim()
);

let n = 0;
let x = 1;
let y = 1;
for (let i = 1; i < 10000000; i++) {
  n += i;
  if (input <= n) {
    if (i % 2 === 0) {
      let cnt = n - input;
      x = i;
      for (let j = 0; j < cnt; j++) {
        x--;
        y++;
      }
    } else {
      let cnt = n - input;
      y = i;
      for (let j = 0; j < cnt; j++) {
        x++;
        y--;
      }
    }
    break;
  }
}
console.log(`${x}/${y}`);

// 더 깔끔한 답

// while(X > 0){
//   counter++;
//   X = X-counter;
// }

// if(counter%2===0){
//   console.log(`${counter+X}/${1+ -X}`);
// }
// else{
//   console.log(`${1+ -X}/${counter+X}`);
// }
