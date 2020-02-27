
/*var funct = function funct() {
    var a = 2,
        b = 3;

    var funct2 = function funct2() {
        console.log(a + b);
    };

    setTimeout(funct2, 1000);
};

funct();*/

(function counter() {
    var cnt = 0,
        item1 = document.querySelector("#item1"),
        item2 = document.querySelector("#item2");

    var print = function print() {
        console.log(cnt);
    };

    item1.addEventListener("click", function count1() {
        cnt++;
        print();
    });

    item2.addEventListener("click", function count2() {
        cnt++;
        print();
    });
})();