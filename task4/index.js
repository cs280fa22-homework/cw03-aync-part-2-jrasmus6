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

// We have n tasks!
// Task 1!
// .
// .
// .
// Task n!

// it should always log those task in order 
// regardless of their timing