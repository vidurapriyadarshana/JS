// Imidiatly invoke function expression(IIFE)

function sum(a, b) {
    return a + b;
}

let count = sum(3, 2);
console.log(count);

(function (a , b) {
    console.log(a + b);
})(3, 2);
