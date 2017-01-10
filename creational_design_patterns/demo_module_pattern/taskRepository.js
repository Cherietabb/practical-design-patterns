// database code is encapsulated in an object.  When this function is executed, all database work is here, but calling functions can't access the database.

var Repo = function () {

    var db = {};

    var get = function (id) {
        console.log('Getting task ' + id);
        return {
            name: 'new task from db'
        }
    };
    var save = function (task) {
        console.log('Saving ' + task.name + ' to the db.');
    };

    return {
        // method that does gets.
        get: get,
        save: save
    }
};

module.exports = Repo();
