const input = require("fs")
  .readFileSync("../input/25501.txt")
  .toString()
  .split("\n");

const N = input.shift();
let cnt = 0;
for (let i = 0; i < N; i++) {
  cnt = 0;
  console.log(isPalindrome(input[i]), cnt);
}

function recursion(s, l, r) {
  cnt++;
  if (l >= r) return 1;
  else if (s[l] != s[r]) return 0;
  else return recursion(s, l + 1, r - 1);
}

function isPalindrome(s) {
  return recursion(s, 0, s.length - 1);
}
