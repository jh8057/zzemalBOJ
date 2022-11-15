let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = Number(fs.readFileSync("./input/10844.txt").toString());

const dp = [new Array(10).fill(1)];

for (let x = 1; x < input; x++) {
  dp[x] = [1];
  for (let y = 1; y < 10; y++) {
    dp[x][y] = (dp[x - 1][y] + dp[x][y - 1]) % 10007;
  }
}

const result = dp[input - 1].reduce((pre, cur) => pre + cur, 0);
console.log(result % 10007);

//https://animoto1.tistory.com/entry/%EB%B0%B1%EC%A4%80-11057-%EC%98%A4%EB%A5%B4%EB%A7%89-%EC%88%98-%ED%8C%8C%EC%9D%B4%EC%8D%AC-Python
