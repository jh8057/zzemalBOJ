function solutionA(str) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(str.length);
    }, 2000);
  });
}
