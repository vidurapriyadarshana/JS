// HOF(Higher Order Function)

//1, it takes one or more functions as arguments
//2, it returns a function


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function twox(arr = [], fn) {
    var a = [];

    for (let i = 0; i < arr.length; i++) {
        let result = fn(arr[i], i, arr);
        a.push(result);
    }


    return a;
}


// var arr2 = arr.map((element)=> {
//    return element * 2 ; 
// }); 



var arr2 = twox(arr, (element) => {
    return element * 2;
})


console.log("💢", arr2)
