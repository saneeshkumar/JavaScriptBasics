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

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.email !== user.email
        })
    }
}

let userOne = new User('User One', 'userone@user.com');
let userTwo = new User('User Two', 'usertwo@user.com');
let admin = new Admin('Admin', 'admin@user.com');

let users = [userOne, userTwo, admin]

admin.deleteUser(userOne);

console.log(users)