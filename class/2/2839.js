const inputs = Number(
  require("fs").readFileSync("../../input/2839.txt").toString().trim()
);

console.log("input", inputs);

let count = 0;

let div = parseInt(inputs / 5);
console.log(div);
count += div;

let extra = inputs % 5;

console.log(extra);
if (extra === 0) {
  console.log(count);
  return;
}
