const input = require("fs")
  .readFileSync("../input/10814.txt")
  .toString()
  .split("\n");

const N = input.shift();
input.sort((a, b) => {
  return parseInt(a) - parseInt(b); // parseInt : 20 junkyu -> 20으로 나옴
  // return a.split(" ")[0] - b.split(" ")[0];
});

console.log(input.join("\n"));

// 이런 방식도 있다.
const res = Array.from(Array(201), () => "");
for (let i = 0; i < N; i += 1) {
  const [age, name] = input[i].split(" ");
  res[age] += input[i] + "\n";
}
console.log(res);
