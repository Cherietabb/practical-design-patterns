// var task = {};

// var task = Object.create(Object.prototype);

var task = new Object();
task.title = 'My task';
task.description = 'My description';
task.toString = function () {
  return this.title + ' ' + this.description;
};

console.log(task.toString());
