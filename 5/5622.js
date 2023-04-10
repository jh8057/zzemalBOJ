const input = require("fs").readFileSync("../input/5622.txt").toString().trim();

let dic = {
  3: "ABC",
  4: "DEF",
  5: "GHI",
  6: "JKL",
  7: "MNO",
  8: "PQRS",
  9: "TUV",
  10: "WXYZ",
};
let answer = 0;
for (let i = 0; i < input.length; i++) {
  for (const value in dic) {
    if (dic[value].includes(input[i])) {
      answer += +value;
    }
  }
}

console.log(answer);
