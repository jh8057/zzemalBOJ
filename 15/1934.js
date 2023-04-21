const input = require("fs")
  .readFileSync("../input/1934.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());

/** 유클리드 호제법 */
const gcd = (a, b) => {
  let temp;
  while (b !== 0) {
    temp = a % b;
    a = b;
    b = temp;
  }
  return a;
};

for (let i = 0; i < T; i++) {
  let [A, B] = input[i].split(" ").map((el) => +el);
  /** 최소공배수 = 두수곱 / 최대공약수 */
  console.log((A * B) / gcd(A, B));
}

// https://leylaoriduck.tistory.com/496
