// function foo(bar) {
//     bar();
// }

// foo(function () {
//     console.log('bar');
// });

// function named() {
//     console.log('named');
// }

// foo(named);

function foo(bar) {
    if (itsNight) {
        bar();
    }

    if (isDrinksOverCheckOnLine) {
        bar();
    }
}