let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync("./input/1476.txt").toString();
let [E, S, M] = input.split(" ");
E = Number(E);
S = Number(S);
M = Number(M);

let target = 1;
while (true) {
  target++;
  let e = target % 15 === 0 ? 15 : target % 15;
  let s = target % 28 === 0 ? 28 : target % 28;
  let m = target % 19 === 0 ? 19 : target % 19;

  if (E === e && S === s && M === m) break;
}

console.log(target);
