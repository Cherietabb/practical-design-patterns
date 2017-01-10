// an advantage of using bracket notation is that you can use variables.

var obj = {};

var val = 'value';
// using the string val with 'value' to assign new value in object.  The advantage is when you don't know what's in the variable.
obj[val] = 'new value';

console.console.log(obj[val]); // new value
