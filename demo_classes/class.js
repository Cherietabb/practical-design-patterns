// In EcmaScript 2015, the class operator on an object.  methods and properties can be wrapped in the class.
class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    };
    complete () {
        console.log('Completing task: ' + this.name);
        this.completed = true;
    };
    save () {
        // the 'this' refers to the object scope of whatever object is calling the save function.
        console.log('saving task ' + this.name);
    };
}

var task1 = new Task('create a demo for constructors');
var task2 = new Task('create a demo for modules');
var task3 = new Task('create a demo for singletons');
var task4 = new Task('create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();