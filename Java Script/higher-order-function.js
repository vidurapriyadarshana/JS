// HOF(Higher Order Function)

//1, it takes one or more functions as arguments
//2, it returns a function

function getCapture(camara) {
    camara();
}

getCapture(function () {
    console.log('hello');
});

function returnF() {
    return function () {
        console.log('returining function');
    }
}


const fn = returnF;

const fnn = returnF();

