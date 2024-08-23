const inputs = require("fs")
  .readFileSync("../../input/1991.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(inputs.shift());

const map = new Map();

class Node {
  constructor({ root, left, right }) {
    this.root = root;
    this.left = left;
    this.right = right;
  }
}

for (let i = 0; i < N; i++) {
  let [root, left, right] = inputs[i].split(" ");

  map[root] = new Node({ root, left, right });
}

// 전위
const pre = (node, answer = "") => {
  const root = node.root;
  const left = node.left;
  const right = node.right;

  //middle
  answer += root;
  //left
  if (left !== ".") {
    answer = pre(map[left], answer);
  }
  //right
  if (right !== ".") {
    answer = pre(map[right], answer);
  }

  return answer;
};

const result = pre(map["A"], "");
console.log(result);

// 중위
const middle = (node, answer = "") => {
  const root = node.root;
  const left = node.left;
  const right = node.right;

  //left
  if (left !== ".") {
    answer = middle(map[left], answer);
  }
  //middle
  answer += root;

  //right
  if (right !== ".") {
    answer = middle(map[right], answer);
  }

  return answer;
};

const result2 = middle(map["A"], "");
console.log(result2);

// 후위
const post = (node, answer = "") => {
  const root = node.root;
  const left = node.left;
  const right = node.right;

  //left
  if (left !== ".") {
    answer = post(map[left], answer);
  }

  //right
  if (right !== ".") {
    answer = post(map[right], answer);
  }

  //middle
  answer += root;

  return answer;
};

const result3 = post(map["A"], "");
console.log(result3);
