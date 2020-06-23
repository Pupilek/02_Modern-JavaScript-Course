// 1. OOP USING CLASSES (the main case)

class User{
  constructor(username, email){
    // set up properties on a object
    this.userName = username;
    this.email = email;
    this.score =0;
  }

  login(){
    console.log(`${this.userName} just logged in`);
    return this;
  }
  logout(){
    console.log(`${this.userName} just logged out`);
    return this;
  }
  incScore(){
    this.score++;
    console.log(`${this.userName} has a score of ${this.score}`)
    return this;

  }
};
User.prototype.login = function(){
console.log(`${this.userName} just logged in`);
}


// userOne.login().incScore().incScore().logout();

// the 'new' keyword
// 1 - It creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to build the object 
class Admin extends User{
  constructor(userName, email, title){
    super(userName, email);
    this.title = title;
  };

  deleteUser(user){
    users = users.filter(u => u.userName !== user.userName)

  };
} 

//--------------------------------------------------------
// 2. OOP USING PROTOTYPES

function User(username, email){
  this.username = username;
  this.email = email;
}

User.prototype.login = function(){
  console.log(`${this.username} has logged in`);
  return this;
}

User.prototype.logout = function(){
  console.log(`${this.username} has logged out`);
};

function Admin(username, email, title){
  User.call(this, username, email);
  this.title = title;
}
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(user){
  users = users.filter(u => u.userName !== user.userName)
};
//--------------------------------------------------------

const  userOne = new User('mario', 'm@jk.ti');
const  userTwo = new User('luigi', 'lui@jk.ti');
const userThree = new Admin('Andrii', 'admin@gji.cu', 'black-belt');




console.log(userOne, userTwo, userThree);
// userOne.login().logout();

// let users = [userOne, userTwo, userThree];
// console.log(users);

// userThree.deleteUser(userTwo);
// console.log(users);

//console.log(userThree.logout().incScore());