# Task 4

Consider the following code snippet:

```js
function task(id) {
  return () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Task ${id}!`);
        resolve();
      }, Math.random() * 1000);
    });
  };
}

function getTasks() {
  const numTasks = Math.floor(Math.random() * 10) + 1;
  const tasks = [];
  for (let i = 1; i <= numTasks; i++) {
    tasks.push(task(i));
  }
  return tasks;
}

inOrder(getTasks());
```

Write a function called `inOrder` that accepts an array of callbacks and invokes them in order. Do not make any changes to `task` and `getTasks`. In your implementation, use the async/await pattern.
