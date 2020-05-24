let userOne = {
    email: 'userOne@user.com',
    name: 'User One',
    login(){
        console.log(this.email, 'is online...');
    },
    logout(){
        console.log(this.email, 'has logged out...');
    }
};

console.log(userOne.name)