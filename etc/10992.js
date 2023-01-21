let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync("../input/2741.txt").toString();
let answer = "";
for (let i = 1; i <= input; i++) {
  if (i == input) {
    answer += "*".repeat(2 * i - 1) + "\n";
  } else if (i > 2) {
    answer += " ".repeat(input - i) + "*" + " ".repeat(2 * i - 3) + "*" + "\n";
  } else {
    answer += " ".repeat(input - i) + "* ".repeat(i) + "\n";
  }
}
console.log(answer);

// const N = +require('fs').readFileSync('dev/stdin').toString();
// for(let i=1; i<=N; i++){
//     if(i === 1) console.log(new Array(N-i+1).join(' ') + '*');
//     else if(i === N) console.log(new Array(N*2).join('*'));
//     else {
//         console.log(new Array(N-i+1).join(' ') + '*' + new Array((i-1)*2).join(' ') + '*');
//     }
// }
