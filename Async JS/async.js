function getData() { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(46)
        })
    })
}

async function printData() {
    const number = await getData();
    console.log(number);
}

printData();