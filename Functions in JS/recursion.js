// function foo() {
//     console.log('foo');
//     foo();
// }



const foo = function buz() {
    foo();
}

function fetchWater(count) {
    if (count === 0) {
        console.log('water is fetched');
    }

    fetchWater(count - 1);

}