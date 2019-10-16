class Person {
    constructor (name) { 
        this.name = name
        this.friends = [];
};

    addFriend(friend) {
        this.friends.push(friend);
    };
    greet(other){
    console.log(this.createdGreeting(other));
    };
    createdGreeting(other) {
        return `Yo , ${other.name},! from , ${this.name}.`;
    };
    lazyGreet(other){
        setTimeout =>
        console.log(greet.other);
    }
};
