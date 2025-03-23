function solution(str) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(str.length);
    }, 5000);
  });
}
