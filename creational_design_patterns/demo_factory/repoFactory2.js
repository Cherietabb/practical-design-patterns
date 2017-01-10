
var repoFactory = function () {
    // repos refers to the object scope for the repoFactory.
    var repos = this;
    var repoList = [{name: 'task', source: './taskRepository'},
        {name: 'user', source: './userRepository'},
        {name: 'project', source: './projectRepository'}];

    repoList.forEach(function (repo) {
        // using bracket notation because I'm using a variable.
        repos[repo.name] = require(repo.source)()
    });
};


module.exports = new repoFactory;