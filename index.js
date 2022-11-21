//Promise
//Holds the eventual result of an asynchronous operation
//Pending ------->async operation          Fulfilled or rejected

console.log('Before');
getUser(1, getRepositories);

console.log('After');

function getRepositories(user) {
    getRepositories(user.gitHubUsername, getCommits);
}
function getCommits(repos){
    getCommits(repo, displayCommits);
}
function displayCommits(commits){
    console.log(commits);
}


function getUser(id, callback) {
   setTimeout(() => {
    console.log('Reading a user from database....');
    callback( {id: id, gitHubUsername: 'naquib1229'} );
},  2000);
}

function getRepositories(username, callback1){
    setTimeout(() => {
        console.log('Calling GitHub API.. ');
        callback1(['repo1', 'repo2', 'repo3']);
    }, 2000);
}
function getCommits(repo, callback){
    setTimeout(() => {
        console.log('Fetching commits');
        callback(['commit1', 'commit2']);
    }, 2000);
}

//output



