var objProto = {
    greet: function() {
        console.log(this.greeting + " World!");
    }
};

var Greeting = function(term) {
    this.greeting = term;
};

Greeting.prototype = objProto;

var obj1 = new Greeting("Howdy");

var obj2 = Object.create(objProto);
obj2.greeting = "Hi";

var obj3 = {
    greeting: "Hello"
};

Object.setPrototypeOf(obj3, objProto);