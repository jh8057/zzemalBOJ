const input = Number(
  require("fs").readFileSync("../input/2292.txt").toString().trim()
);

let n = 0;
let i = 0;
while (n < input) {
  n = 3 * i * (i + 1) + 1;
  if (n < input) i++;

  // n += 6*i
  // i++
  // console.log(i)
}
console.log(i + 1);
