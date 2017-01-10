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

// create a sub object that wraps Task.
var UrgentTask = function (name, priority) {
    Task.call(this, name);
    this.priority = priority;
};
// makes a new object for prototype out of task's prototype.
UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function () {
    console.log('notifying important people...')
};

UrgentTask.prototype.save = function () {
    this.notify();
    console.log('do special stuff before saving');
    Task.prototype.save.call(this);
};


var ut = new UrgentTask('This is urgent', 1);
var poop = new UrgentTask('This is normal', 4);

// ut.complete();
// ut.save();
// console.log(ut);

poop.complete();
poop.save();
console.log(poop);