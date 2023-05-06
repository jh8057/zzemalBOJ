// const n = require("fs").readFileSync("../input/24265.txt").toString().trim();

// console.log(`${(n * (n - 1) * (n - 2)) / 6}`);

// console.log("3");

// https://dev-mandos.tistory.com/124

const n = require("fs").readFileSync("/dev/stdin").toString().trim();
const answer = (BigInt(n) * BigInt(n - 1) * BigInt(n - 2)) / BigInt(6);

console.log(`${answer}\n3`);
