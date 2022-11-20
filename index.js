//Async Patterns 

console.log('Before');
const user = getUser(1);
console.log(user);
console.log('After');

function getUser(id) {
   setTimeout(() => {
    console.log('Reading a user from database....');
    return {id: id, gitHubUsername: 'naquib1229'};
},  2000);

    return 1;
}



//output

//Before
//undefined
//After
//Reading a user from database....
