const [N, ...arr] = require("fs")
  .readFileSync("../input/2750.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

// arr.sort((a, b) => a - b)
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// console.log(require('fs')
//     .readFileSync(fileName)
//     .toString()
//     .trim()
//     .split('\n')
//     .slice(1).sort((a, b) => a - b).join('\n'));

let result = arr.sort((a, b) => a - b);
console.log(result.join("\n"));
// 2751 -> for 문 말고 한번에 합쳐서 해야됐다.
//https://gywlsp.github.io/boj/2751/

// 10989 nodejs로 풀이 불가
// https://velog.io/@sudago22/%EB%B0%B1%EC%A4%80-BOJ-10989%EB%B2%88-%EC%88%98-%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B03-JavaScript-%EB%B6%88%EA%B0%80
// sort algorithms
// https://velog.io/@chappi/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-6%EC%9D%BC%EC%B0%A8-On-%EC%A0%95%EB%A0%AC-%EA%B3%84%EC%88%98-%EC%A0%95%EB%A0%AC#3-%EC%8B%9C%EA%B0%84%EB%B3%B5%EC%9E%A1%EB%8F%84-%EB%B6%84%EC%84%9D
