
let things = ['Building', 'car', 'bicycle', 'automobile', 'Tree', 'house'];

things.sort(function(a, b) {
    let x = a.toLowerCase(),
        y = b.toLowerCase();

    if (x < y) {return -1;}
    if (y < x) {return 1;}
    return 0;
});

