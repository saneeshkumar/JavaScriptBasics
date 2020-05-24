class User {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    login() {
        console.log(this.email, 'is online');
    }

    logoff() {
        console.log(this.email, 'has logged out');
    }
}

let userOne = new User('User One', 'userone@user.com');
let userTwo = new User('User Two', 'usertwo@user.com');

console.log(userOne);
console.log(userTwo);

userOne.login();
userTwo.logoff();