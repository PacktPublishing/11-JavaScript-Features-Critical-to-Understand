
var funct = function funct() {
    var a = 2,
        b = 3;

    var funct2 = function funct2() {
        console.log(a + b);
    };

    funct2();
};

var funct3 = function funct3() {
    console.log(a + b);
};

funct();

funct3();