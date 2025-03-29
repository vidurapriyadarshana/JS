function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(46)
        },1000)
    })
}


const result = await getData();
console.log(result);