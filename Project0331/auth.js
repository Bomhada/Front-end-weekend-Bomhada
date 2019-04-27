function User(email, password){
    this.email = email;
    this.password = password;
}

var users = [];

users.push(new User ('fdb019@gmail.com', '123'))
users.push(new User ('fdb019@ante.com', '123'))

console.log(users);

function login(email, password){
    for(var i = 0; i < users.length; i++){
        return true;
    }
    return false;
}

module.exports = {
    login
}