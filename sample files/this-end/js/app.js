"use strict";

var fun1 = function() {
    console.log(this);
};

//fun1();

var fun2 = function() {
    fun1();
};

//fun2();

var obj1 = {
    name: 'obj1',
    fun() {
        console.log(this);
    }
};

//obj1.fun();

var obj2 = {
    name: 'obj2',
    fun: obj1.fun
};

//obj2.fun();

setTimeout(obj1.fun, 1000);



