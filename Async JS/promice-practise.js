function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Hello World');
        },2000) 
    })
}

function onError(data) {
    console.log(`Error: ${data}`)
}

function onSuccess(data) {
    console.log(`Success: ${data}`)
}

getData()
    .then(onSuccess, onError);