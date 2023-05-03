let input = require("fs").readFileSync("../input/2941.txt").toString().trim();
let alpha = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let i = 0; i < alpha.length; i++) {
  let target = alpha[i];
  input = input.replaceAll(target, "*");
}
console.log(input.length);
