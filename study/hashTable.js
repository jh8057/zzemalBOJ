class HashTable {
  constructor() {
    this.table = new Array(1000); // Initialize the table with a fixed size
  }

  // Hash the key to get an index in the table
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  // Add a key-value pair to the table
  add(key, value) {
    let index = this.hash(key);
    if (this.table[index] === undefined) {
      this.table[index] = [[key, value]];
    } else {
      this.table[index].push([key, value]);
    }
  }

  // Search for a value given a key
  search(key) {
    let index = this.hash(key);
    if (this.table[index] === undefined) {
      return null;
    } else {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
      return null;
    }
  }
}

let a = new HashTable();

a.add(1, "asd");
a.add(2, "asdasdasfasf");
let resultA = a.search(2);
console.log(resultA);
