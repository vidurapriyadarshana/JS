function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Hello World');
        }, 2000)
    })
}

async function start() {
    try {
        const number = await getData();
        console.log(number);
    } catch (error) {
        console.log(`error : ${error}`);
    }
}

async function start2() {
    const result = await getData()
        .catch(error => console.log(error));
    
    console.log(result);
}

start();
start2();