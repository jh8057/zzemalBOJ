const input = Number(
  require("fs").readFileSync("../input/2444.txt").toString()
);

let answer = "";
for (let i = 1; i <= input; i++) {
  answer += " ".repeat(input - i) + "*".repeat(2 * i - 1) + "\n";
}

for (let i = 1; i < input; i++) {
  answer += " ".repeat(i) + "*".repeat(2 * (input - i) - 1) + "\n";
}
console.log(answer.trimEnd());
