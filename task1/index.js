function task1(callback) {
  setTimeout(() => {
    console.log("Task 1!");
    callback();
  }, Math.random() * 1000);
}

function task2() {
  setTimeout(() => {
    console.log("Task 2!");
  }, Math.random() * 1000);
}

function inOrder(fn1, fn2) {
  fn1(fn2);
}

inOrder(task1, task2); 
// it should always log those two in order 
// regardless of their timing