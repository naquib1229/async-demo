//Creating Settled Promises
//In a writing unit test.So you want to simulate a scenario where an asynchronous operations like calling 
// a web service completes successfully. In your unit test, you want to create a promise that is already 
//resolved. that's why you need, you can call Promise, this is the Promise class, it has static method called resolve.
//And this will return a promise that is already resolve, here we cann optionally pass a value.

const p = Promise.resolve({id: 1});
p.then(result => console.log(result));

//similarly for reject
/*
const p = Promise.reject(new Error('reason for rejection'));
p.catch(err => console.log('Error', err.message));
*/