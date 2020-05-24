class User {

    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.score = 0;
    }

    login() {
        console.log(this.email, 'is online');
        return this;
    }

    logoff() {
        console.log(this.email, 'has logged out');
        return this;
    }

    updateScore() {
        this.score += 1;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

let userOne = new User('User One', 'userone@user.com');
let userTwo = new User('User Two', 'usertwo@user.com');

userOne.login().updateScore().updateScore().logoff();
userTwo.login().updateScore().logoff();