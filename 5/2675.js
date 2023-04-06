const input = require("fs")
  .readFileSync("../input/2675.txt")
  .toString()
  .split("\n");

let T = input.shift();

let result = [];
for (let i = 0; i < T; i++) {
  let [R, S] = input[i].split(" ");

  result.push(
    S.split("")
      .map((el) => el.repeat(R))
      .join("")
  );
}

console.log(result.join("\n"));
