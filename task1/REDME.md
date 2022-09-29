# Task 1

Consider the following code snippet:

```js
function task1() {
  setTimeout(() => {
    console.log("Task 1!");
  }, Math.random() * 1000);
}

function task2() {
  setTimeout(() => {
    console.log("Task 2!");
  }, Math.random() * 1000);
}

inOrder(task1, task2);

// Task 1!
// Task 2!

// it should always log those two in order regardless of their timing
```

Write a function called `inOrder` that accepts two callbacks and invokes them in order. You may update `task1` and `task2,` but they must remain asynchronous with a random timeout. In your implementation, use the callback pattern.
