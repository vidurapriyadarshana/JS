class Person {
    talk() {
        return 'talk';
    }
}

const me = new Person();
const you = new Person();

const talk = me.talk();
const talk2 = you.talk();

console.log(talk);
console.log(talk2);

Person.prototype.talk = function () {  //change function using prototype 
    return'I am talking';
}

me.talk();
you.talk();

console.log(me.talk());
console.log(you.talk());


class SuperHuman extends Person {
    fly() {
        return 'fly';
    }
}

const superman = new SuperHuman();

superman.fly();
superman.talk();

console.log(superman.fly());
console.log(superman.talk());

const newObj = Object.create(Person);  // object create 

newObj.talk();

const obj2 = {};

Object.setPrototypeOf(obj2, Person);
