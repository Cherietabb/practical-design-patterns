var repo = function () {
    var called = 0;

    var save = function (task) {
        called++;
        console.log('Saving ' + task + 'Called ' + called + ' times');
    };
    console.log('newing up task repo');
    return {
        save: save
    }
};

//repo() executes the function.  This creates a singleton of whats saved in the above object
module.exports = new repo;