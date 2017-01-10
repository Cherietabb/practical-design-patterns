
var task = {
    title: 'My Title',
    description: 'My Description'
};

Object.defineProperty(task, 'toString,', {
    value: function () {
        return this.title + ' ' + this.description;
    },
    // setting to false prevents overwriting.
    writable: false,
    // setting to false prevents viewing functions
    enumerable: false,
    // setting to false prevents redefining property.
    configurable: false
});

console.log(task);