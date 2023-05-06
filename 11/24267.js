const n = require("fs").readFileSync("../input/24265.txt").toString().trim();

console.log(`${(n * (n - 1) * (n - 2)) / 6}`);

console.log("3");

// https://dev-mandos.tistory.com/124
