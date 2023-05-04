const input = parseInt(require("fs").readFileSync(0).toString().trim());

function factorial(number) {
  if (number === 0) return 1;
  return number * factorial(number - 1);
}

let result = factorial(input);
console.log(result);
