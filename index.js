//Async and Await

console.log('Before');

// getUser(1)
//     .then(user => getRepositories(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log('Commits', commits))
//     .catch(err => console.log('Error', err.message));

// console.log('After');

//Async and Await approach
async function displayCommits() {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
}

displayCommits();


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



