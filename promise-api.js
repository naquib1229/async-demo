//Running Parallel Promises
//Sometimes you want to run a multiple asynchronous operations in parallel, and when one asynchronous operation completes,
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

Promise.race([p1,p2]) //If any of the promises resolved as soon as then Promise.race is considered resolved.
    .then(result => console.log(result))
    .catch(err => console.log('Error', err.message));