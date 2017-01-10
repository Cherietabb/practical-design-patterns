// 3 ways to create an object

var obj = {};

// takes whatever is passed in, wraps it in an object and send back the object.  This is often used when referring to inheritance.
var nextObj = Object.create(Object.prototype);
// new object is being used a lot for ES6.  it just creates a new, empty object.
var lastObj = new Object();
