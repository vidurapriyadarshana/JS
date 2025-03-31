// document.body.append('Append')

// const h1 = document.createElement('h1')
// document.body.appendChild(h1)

// h1.innerText = 'Hello World'


const myHeading = document.createElement('h1');

document.body.appendChild(myHeading);

myHeading.innerText = 'Hello World';

const now = new Date();
myHeading.innerText = `Time: ${now.getHours()}:${now.getMinutes()}`;