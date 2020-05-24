function User(name, email) {
    this.name = name;
    this.email = email;
    this.online - false;

    this.login = function(){
        console.log(this.email, 'has logged in');
    }
    
}

let userOne = new User('User One', 'userone@user.com');
let userTwo = new User('User Two', 'usertwo@user.com');

console.log(userOne)
userTwo.login()