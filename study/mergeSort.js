function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // 기저 사례: 배열의 길이가 1 이하이면 정렬할 필요가 없음
  }

  // 배열을 반으로 나누기
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // 재귀적으로 각 하위 배열을 정렬
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // 정렬된 하위 배열 병합
  return merge(sortedLeft, sortedRight);
}

// 두 배열을 병합하여 정렬된 배열 반환
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // 두 배열을 비교하여 작은 값을 결과 배열에 삽입
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // 남은 요소들을 결과 배열에 추가
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}

// 예제 배열 정의
const arr = [8, 3, 9, 5, 6, 2, 7, 1];

// 합병 정렬 수행
const sortedArray = mergeSort(arr);
console.log(sortedArray); // 정렬된 배열 출력
