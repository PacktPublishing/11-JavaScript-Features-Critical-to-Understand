hoisting();

function hoisting() {
    console.log(hoist);

    var what = "Variable and function declarations.";

    console.log("What is hoisted? " + what);

    var hoist = "to lift or raise up.";

    console.log("Hoist means " + hoist);
}

