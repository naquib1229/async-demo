//Callbacks

console.log('Before');
getUser(1, function(user) {
    console.log('User', user);
});
console.log('After');

function getUser(id, callback) {
   setTimeout(() => {
    console.log('Reading a user from database....');
    callback( {id: id, gitHubUsername: 'naquib1229'} );
},  2000);
}



//output

//Before
//After
//Reading a user from database....
//User { id: 1, gitHubUsername: 'naquib1229' }

