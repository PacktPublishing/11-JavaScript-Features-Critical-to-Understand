"use strict";

function communication() {
    let greet = "Hello ",
        goodbye = "So long ";

    const getGreet = function () {
        let d = new Date();
        if (d.toLocaleTimeString().includes('AM')) {
            greet = "Good Morning ";
        } else {
            greet = "Hello ";
        }
        return greet;
    };

    const greeting = function (name) {
        console.log(`${getGreet() + name}! Welcome to the course.`);
    };
};