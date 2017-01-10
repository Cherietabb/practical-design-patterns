// in node.js, you create your objects in one file and use them in another file.  This file is used as a module for another file.
var Task = function (name) {
    this.name = name;
    this.completed = false;
};

// every time a new copy of Task is created, the complete function isn't copied.  All of the task copies have access to the function.
Task.prototype.complete = function () {
    console.log('Completing task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function () {
    // the 'this' refers to the object scope of whatever object is calling the save function.
    console.log('saving task ' + this.name);
};

module.exports = Task;