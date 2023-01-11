const fs = require("fs");
const findPiece = fs
  .readFileSync("../input/3003.txt")
  .toString()
  .trim()
  .split(" ")
  .map((el) => Number(el));

const chessPiece = [1, 1, 2, 2, 2, 8];

const diffResult = chessPiece.map((el, index) => {
  return el - findPiece[index];
});
console.log(diffResult.join(" "));
