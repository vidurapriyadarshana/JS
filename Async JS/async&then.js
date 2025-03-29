function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(46)
        }, 1000)
    })
}

async function start() {
    const number = await getData();
    console.log(number);
}

async function start1() {
    getData()
        .then(data => console.log(data));
}

start();
start1();