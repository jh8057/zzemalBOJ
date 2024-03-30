const inputs = require("fs")
  .readFileSync("../input/10816.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(inputs[0]);
const cards = inputs[1].split(" ").map((el) => +el);
const M = Number(inputs[2]);
const targets = inputs[3].split(" ").map((el) => +el);

let cardCount = new Map();
for (let i = 0; i < N; i++) {
  let card = cards[i];
  if (cardCount.has(card)) {
    cardCount.set(card, cardCount.get(card) + 1);
  } else {
    cardCount.set(card, 1);
  }
}

const answer = [];
for (let i = 0; i < M; i++) {
  answer.push(cardCount.get(targets[i]) || 0);
}
console.log(answer.join(" "));
