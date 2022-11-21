//Consuming Promises

console.log('Before');

const p = getUser(1);
p.then(user => console.log(user));

console.log('After');




function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from database....');
            resolve( {id: id, gitHubUsername: 'naquib1229'} );
        },  2000);
    });
   
}

function getRepositories(username){
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        console.log('Calling GitHub API.. ');
        resolve(['repo1', 'repo2', 'repo3']);
    }, 2000); 
    });   
}

function getCommits(repo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log('Fetching commits');
        resolve(['commit1']);
    }, 2000);
    });
}
    

//output



