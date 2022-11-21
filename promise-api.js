//Running Parallel Promises
//Sometimes you want to run a few asynchronous operations in parallel, and when they all complete,
//You want to something after

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async Operation 1 ...');
        reject(new Error('Operation 1 failed'));
    }, 2000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async Operation 2 ...');
        resolve(2);
    }, 2000);
});

Promise.all([p1,p2]) //If any of the promises rejected then Promise.all is considered rejected.
    .then(result => console.log(result))
    .catch(err => console.log('Error', err.message));