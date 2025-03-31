async function start(params) {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const result = await data.json();
    console.log(result);
}


async function start2(params) {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(result => {
            console.log(result);
        })
}


start();
start2();