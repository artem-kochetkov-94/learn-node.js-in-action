function taskOne() {
  console.log("one");
  next(null);
}

function taskTwo() {
  console.log("two");
  next(null);
}

function taskThree() {
  console.log("three");
  next(null);
}

const tasks = [taskOne, taskTwo, taskThree];

function next(err, result) {
  if (err) throw err;
  const currentTask = tasks.shift();
  if (currentTask) {
    currentTask(result);
  }
}

next();
