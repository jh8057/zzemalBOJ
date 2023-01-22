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

//안정 정렬(stable sort)
// 즉, 정렬을 했을 때 중복된 값들의 순서가 변하지 않으면 안정(Stable) 정렬, 변하면 불안정(Unstable) 정렬인 것이다.
// https://velog.io/@cookncoding/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B0%9C%EB%85%90-Stable-Sort-Inplace
