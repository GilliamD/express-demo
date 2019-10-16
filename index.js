class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    static discribe(subject) {
        return `${subject.name}, ${subject.age} years old`;
    }

    greet(greeting) {
        return `Hello, I am ${this.name}. I am ${this.age} years old... But, aren't you me..? ${greeting}?`
    }
}
const me = new Person("Devante", 25);
const twin = new Person("Gilford", 25);

console.log(Person.discribe(twin));
console.log(twin.greet("...There can only be one"));
console.log(me.greet("pls, bro. no."))
