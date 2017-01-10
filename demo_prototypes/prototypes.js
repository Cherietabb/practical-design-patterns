
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

var task1 = new Task('create a demo for constructors');
var task2 = new Task('create a demo for modules');
var task3 = new Task('create a demo for singletons');
var task4 = new Task('create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();