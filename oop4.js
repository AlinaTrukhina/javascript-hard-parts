// solution 4: the class 'syntactic sugar'

class userCreator {
    constructor (name, score) {
        this.name = name;
        this.score = score;
    }
    // adds function to create userCreator.prototype object, then add increment and login properties
    increment (){ this.score++; }
    login (){ console.log('Logged in'); }    
}

const user1 = new userCreator("Eva", 9);
user1.increment();
console.log(user1);