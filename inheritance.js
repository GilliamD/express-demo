/*var mom = {
    firstName: 'Alice',
    lastName: 'Wong',
    eyeColor: 'brown',
    hairColor: 'black'
};

var daughter = {
    firstName: 'Ilene',
    hairColor: 'brown'
};*/

class Mom {
    constructor(first, last, eye, hair) {
        this.first = first;
        this.last = last;
        this.eye = eye;
        this.hair = hair;
    }
}

class Child extends Mom {
    constructor(first, last, eye, hair, age) {
        super(null, last, eye, null);
        this.first = first;
        this.last = mom.last;
        this.eye = mom.eye
        this.hair = mom.hair
        this.age
    }
}

const mom = new Mom("Alice", "Wong", "Brown", "Black");
const daughter = new Child("Ilene", "Brown", "black, 19");
console.log(mom)
console.log(daughter)

const self = this;

addFriend(other) {
    this,friends.push(other);
}

createdGreeting(other) {
    console.log("Yo " + other.name + "! from " +this.name + ".");
}

greet(other) 
    return this.createGreeting(other)
};

lazyGreet(other) {
    setTimeout(() => {
        
    }, timeout(1000));
}