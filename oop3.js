// functions are bot objects and functions
// new keyword automates a lot of our manual work

function userCreator(name, score) {
    this.name = name;
    this.score = score;
}

userCreator.prototype.increment = function(){ this.score++; }
userCreator.prototype.login = function(){ console.log("login"); }
    
const user1 = new userCreator("Eva", 9);
// new keyword will create an empty object
// new keyword also automates the returning of "this"

user1.increment;
console.log(user1);