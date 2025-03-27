function Person(type, content) {
    this.element = document.createElement(type);
    this.element.innerText = content;
    document.body.append(this.element);
    this.element.addEventListener('click', () => {
        console.log(this.element);
    })
}

const h2 = new Person('h1', 'Hellooooooo');

const array = ['a', 'b', 'c']

const myElement = array.map(element => {
    return new Person('h1', element)
})
