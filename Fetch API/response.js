const url = 'https://jsonplaceholder.typicode.com/todos/2';

async function getData() {
    const responce = await fetch(url);
    const data = await responce.json();
    console.log(data);
}

getData();