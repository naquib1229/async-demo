//Callback Hell
//Issue caused by coding with complex nested callbacks.

console.log('Before');
getUser(1, function(user) {
    getRepositories(user.gitHubUsername, (repos) => {
        console.log('Repos' repos);
    })
});
console.log('After');

function getUser(id, callback) {
   setTimeout(() => {
    console.log('Reading a user from database....');
    callback( {id: id, gitHubUsername: 'naquib1229'} );
},  2000);
}

function getRepositories(username, callback){
    setTimeout(() => {
        console.log('Calling GitHub API.. ');
        callback( ['repo1', 'repo2', 'repo3'] )
    }, 2000);
}

//output



