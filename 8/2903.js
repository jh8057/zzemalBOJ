const input = Number(
  require("fs").readFileSync("../input/2903.txt").toString().trim()
);

const dp = {
  0: 4,
};
const calDp = (n) => {
  dp[n] = Math.pow(2 * Math.sqrt(dp[n - 1]) - 1, 2);
};

for (let i = 1; i <= input; i++) {
  calDp(i);
}

console.log(dp[input]);

// (2 ** num + 1) ** 2
