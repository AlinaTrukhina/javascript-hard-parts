function userCreator(name, score) {
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
};

const userFunctionStore = {
    increment: function(){
        // arrow function override the normal this rules
        const add1 = () => { this.score++; } // creates a lexically scoped function
        add1()
    }
}

const user1 = userCreator("Tim", 3);
const user2 = userCreator("Shawn", 5); 
user1.increment();
console.log(user1);
console.log(user2);

// Object.prototype has the function hasOwnProperty
console.log(user1.hasOwnProperty('score'));