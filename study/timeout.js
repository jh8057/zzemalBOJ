async function foo() {
  console.log("foo------");
  console.log("3");
  await promiseFunction();
  console.log("4");
}

function promiseFunction() {
  console.log("prostart");
  return new Promise((resolveInner) => {
    setTimeout(() => {
      console.log("inPromise");
      resolveInner();
    }, 100);
  });
}

function boo() {
  console.log("------boo");
  console.log("5");
}

function main() {
  console.log("1");
  let time1 = setTimeout(foo, 0);
  let time2 = setTimeout(boo, 0);
  console.log("2");
}

main();
