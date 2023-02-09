const input = require("fs")
  .readFileSync("../input/24060.txt")
  .toString()
  .split("\n");

const [N, K] = input[0].split(" ");
const arr = input[1].split(" ").map((el) => +el);

let cnt = 0;
merge_sort(0, arr.length);
if (cnt < K) console.log(-1);

function merge_sort(low, high) {
  // 길이가 1일 경우 끝
  if (high - low < 2) {
    return;
  }
  //가운데 값 설정
  let mid = Math.ceil((low + high) / 2);

  //재귀 - 앞단
  merge_sort(low, mid);
  //재귀 - 뒷단
  merge_sort(mid, high);
  //실질적인 병합 정렬
  merge(low, mid, high);
}

function merge(low, mid, high) {
  const temp = [];
  let l = low;
  let h = mid;

  while (l < mid && h < high) {
    if (arr[l] < arr[h]) {
      temp.push(arr[l]);
      l++;
    } else {
      temp.push(arr[h]);
      h++;
    }
  }

  while (l < mid) {
    temp.push(arr[l]);
    l++;
  }
  while (h < high) {
    temp.push(arr[h]);
    h++;
  }
  for (let i = low; i < high; i++) {
    arr[i] = temp[i - low];
    cnt++;
    // console.log(arr, arr[i], cnt);
    if (cnt == K) console.log(arr[i]);
  }
}

// https://www.daleseo.com/sort-merge/
