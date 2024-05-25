class maxHeap {
  constructor() {
    this.heap = [];
  }

  searchParent(index) {
    return Math.floor((index - 1) / 2);
  }

  searchLeft(index) {
    return this.heap[index * 2 + 1];
  }

  searchRight(index) {
    return this.heap[index * 2 + 2];
  }

  heapUp(index) {
    const parentIndex = this.searchParent(index);
    const parent = this.heap[parentIndex];
    let cnt = 0;
    if (parent < this.heap[index]) {
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      this.heapUp(parentIndex);
    }
  }

  heapDown(index) {
    let leftIndex = index * 2 + 1;
    let rightIndex = index * 2 + 2;
    let largest = index;

    if (
      leftIndex < this.heap.length &&
      this.heap[leftIndex] > this.heap[largest]
    ) {
      largest = leftIndex;
    }

    if (
      rightIndex < this.heap.length &&
      this.heap[rightIndex] > this.heap[largest]
    ) {
      largest = rightIndex;
    }

    if (largest !== index) {
      [this.heap[index], this.heap[largest]] = [
        this.heap[largest],
        this.heap[index],
      ];
      this.heapDown(largest);
    }
  }

  insert(node) {
    this.heap.push(node);
    this.heapUp(this.heap.length - 1);
  }

  delete() {
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];

    let next = this.heap.pop();
    this.heapDown(0);
  }
  print() {
    console.log(this.heap);
  }
}

let heap = new maxHeap();

heap.insert(3);
heap.insert(1);
heap.insert(5);
heap.insert(9);
heap.insert(13);
heap.insert(15);
heap.print();
console.log("-----");
heap.delete();
heap.print();
console.log("-----");
heap.delete();
heap.insert(14);
heap.insert(15);
heap.print();
console.log("-----");
heap.delete();
heap.insert(7);
heap.print();

console.log("-----");
heap.delete();
heap.print();

console.log("-----");
heap.delete();
heap.print();
