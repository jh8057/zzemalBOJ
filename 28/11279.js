const inputs = require("fs")
  .readFileSync("../input/11279.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => +el);

const N = inputs.shift();

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  searchParent(index) {
    return Math.floor((index - 1) / 2);
  }
  leftChild(index) {
    return 2 * index + 1;
  }
  rightChild(index) {
    return 2 * index + 2;
  }
  heapifyUp() {
    let index = this.heap.length - 1;
    const now = this.heap[index];
    while (index > 0) {
      const parentIndex = this.searchParent(index);
      const parent = this.heap[parentIndex];

      if (now <= parent) break;
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      // 인덱스 변경
      index = parentIndex;
    }
  }
  heapifyDown() {
    let index = 0;
    const LEN = this.heap.length;
    const now = this.heap[index];
    while (index < LEN) {
      const leftIndex = this.leftChild(index);
      const rightIndex = this.rightChild(index);
      const left = this.heap[leftIndex];
      const right = this.heap[rightIndex];
      let swapIndex = null;

      // 왼쪽 자식이 힙 범위에 있고 && 현재값 보다 크면 swap
      if (leftIndex < LEN && left > now) {
        swapIndex = leftIndex;
      }
      // 오른쪽 자식이 힙 범위 && 현재값보다 크고 && 왼쪽 자식보다 크면 swap
      if (rightIndex < LEN && right > now && right > left) {
        swapIndex = rightIndex;
      }
      // 아무것도 적용되지 않으면 정상
      if (swapIndex === null) {
        break;
      }
      // swapIndex가 설정된 경우 현재 노드와 swapIndex의 노드를 교환
      [this.heap[index], this.heap[swapIndex]] = [
        this.heap[swapIndex],
        this.heap[index],
      ];
      // 갱신
      index = swapIndex;
    }
  }
  insertHeap(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
  deleteHeap() {
    if (this.heap.length < 1) {
      return 0;
    }
    const num = this.heap[0];
    let last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
    }
    this.heapifyDown(); // 힙의 성질을 유지하도록 heapifyDown 호출
    return num;
  }
}

const max = new MaxHeap();

let answer = [];
for (let i = 0; i < N; i++) {
  let target = inputs[i];
  if (target === 0) {
    answer.push(max.deleteHeap());
  } else {
    max.insertHeap(target);
  }
}

console.log(answer.join("\n"));
