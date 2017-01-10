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

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

var urgentTask = new Task('Urgent Task');
urgentTask.priority = 2;
urgentTask.notify = function () {
    console.log('notifying important people...')
};
urgentTask.complete();

urgentTask.save = function () {
    this.notify();
    Task.prototype.save.call(this)
};

urgentTask.save();