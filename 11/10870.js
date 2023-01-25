// const input = parseInt(require("fs").readFileSync(0).toString().trim());

let fibo = (n) => {
  if (n === 1) return 1;
  else if (n < 1) return 0;
  return fibo(n - 1) + fibo(n - 2);
};

console.log(fibo(40));
