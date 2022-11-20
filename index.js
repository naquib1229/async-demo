//Asynchronous JavaScript
//setTimeout() is an exmaple of Asynchronous Non Blocking function

console.log('Before');
setTimeout(() => {
    console.log('Reading a user from database....');
}, 2000);

console.log('After');