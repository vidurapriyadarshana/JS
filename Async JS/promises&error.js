function fun1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('Good Data');
        }, 1000)
    })
}

function fun2() {
    console.log('fun2');
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('emoji');
        }, 1000)
    })
}

function onSuccess(data) {
    console.log(`Success: ${data}`);
}

function onError(error) {
    console.log(`Error: ${error}`);
}

function onFinally() {
    console.log('inTheEnd');
}

fun1()
    .then(fun2, onError)
    .then(onSuccess)
    .catch(onError)
    .finally(onFinally);