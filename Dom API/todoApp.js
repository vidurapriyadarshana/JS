const input = document.createElement('input')

input.placeholder = 'Enter your todo'
document.body.appendChild(input)

const button = document.createElement('button')
button.innerText = 'Add'
document.body.append(button)

button.addEventListener('click', () => {
    console.log('Click Me Daddy AAAAAAH!')
    const div = document.createElement('div')
    div.innerText = input.value
    document.body.appendChild(div)
})
