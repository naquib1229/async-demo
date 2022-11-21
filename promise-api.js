//Running Parallel Promises
//Sometimes you want to run a few asynchronous operations in parallel, and when they all complete,
//You want to something after

const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async Operation 1 ...');
        resolve(1);
    }, 2000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async Operation 2 ...');
        resolve(2);
    }, 2000);
});

Promise.all([p1,p2]) //This method will return a new promise that will be resolved when all the promises in this array are resolved
    .then(result => console.log(result));