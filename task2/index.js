function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 1");
      resolve();
    }, Math.random() * 1000);
  })
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 2");
      resolve();
    }, Math.random() * 1000);
  })
}

function inOrder(fn1, fn2) {
  fn1()
    .then(() => { fn2() })
    .catch((err) => console.log(err.message));
}

inOrder(task1, task2);

// Task 1!
// Task 2!

// it should always log those two in order regardless of their timing