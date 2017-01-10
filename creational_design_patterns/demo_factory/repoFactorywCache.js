// config code can be added to the factory.

var repoFactory = function () {
    this.getRepo = function (repoType) {
        if (repoType === 'task') {
            // check to see if this taskRepo already exists
            if(this.taskRepo) {
                console.log('Retrieving from cache');
                return this.taskRepo;
            } else {
                this.taskRepo = require('./taskRepository')();
                return this.taskRepo;
            }
        }
        if (repoType === 'user') {
            var userRepo = require('./userRepository')();
            return userRepo;
        }
        if (repoType === 'project') {
            var projectRepo = require('./projectRepository')();
        }
    }
};

module.exports = new repoFactory();