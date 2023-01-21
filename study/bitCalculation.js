let a = 5;
let b = 6;
let binaryA = a.toString(2);
let binaryB = b.toString(2);
console.log(binaryA, binaryB);

console.log("1. & and", a & b, (a & b).toString(2));
console.log("1-1. ", binaryA & binaryB);

console.log("2. | or", a | b, (a | b).toString(2));
console.log("2-1. ", binaryA | binaryB);

console.log("3. ^ xor", a ^ b, (a ^ b).toString(2));
console.log("3-1. ", binaryA ^ binaryB);

console.log("4. ~ Not", ~a, (~a).toString(2)); // 4 => -5 // -5 => 6 // x => -(x+1)
console.log("4-1. ", ~binaryA); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT

console.log("5. >> right shift", a >> 1, (a >> 1).toString(2));
console.log("5-1. ", parseInt(binaryA, 2) >> 1);

console.log("6. << left shift", a << 1, (a << 1).toString(2));
console.log(
  "6-1. ",
  binaryA,
  parseInt(binaryA, 2) << 1,
  (parseInt(binaryA, 2) << 1).toString(2)
); // 2진수라는걸 알려주고 shift해야된다.

console.log("7. >>> ZERO-FILL RIGHT SHIFT", -9 >>> 2, (-9 >>> 2).toString(2));
console.log("7-1. compare >>", -9 >> 2, (-9 >> 2).toString(2));
