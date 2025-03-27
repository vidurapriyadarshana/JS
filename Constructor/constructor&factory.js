function createperson(name) {
    return {
        name,
        talk() {
            return `I am ${name}`
        }
    }
}

const me = createperson('Vidura');
const you = createperson('Dhruv');

me.talk();
you.talk();

console.log(me.talk());
console.log(you.talk());

me.talk = function () {
    return `Hello I am ${this.name}`
}


console.log(me.talk());
console.log(you.talk());