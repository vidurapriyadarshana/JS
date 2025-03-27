function fetchData() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => resolve(json));
    });
}

function displayData(data) {
    console.log(data);
}

fetchData()
    .then(displayData)
    .catch(error => console.log(error));