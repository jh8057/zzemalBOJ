const inputs = require("fs")
  .readFileSync("../../input/1927.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(inputs.shift());

const arr = inputs.map(Number);

console.log(N, arr);

class minHeap {
  constructor() {
    this.heap = [];
  }

  peek() {
    return this.heap[0];
  }

  deleteMin() {
    let root = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    heapifyDown();
    return root;
  }

  insert(value) {
    this.heap.push(value);
    heapifyUp();
  }

  heapifyDown() {}

  heapifyUp() {}
}
