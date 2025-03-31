const form = document.createElement('form');
document.body.appendChild(form);
document.body.style.padding = '20px';
document.body.style.backgroundColor = 'lightblue';

const input = document.createElement('input');
input.placeholder = 'Enter your todo';
form.appendChild(input);


const button = document.createElement('button');
button.innerText = 'Add';
form.appendChild(button);
button.style.backgroundColor = 'red';

const ul = document.createElement('ul');
document.body.appendChild(ul);

const removeElement = (e) => {
    console.log(e);
    e.remove();
}


form.onsubmit = (e) => {
    e.preventDefault();
    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = input.value;
    input.value = '';

    li.onclick = removeElement.bind(null, li);

    input.value = '';
}

