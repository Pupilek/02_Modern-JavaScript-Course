//console.log("Chapter 5");

// const blogs = [
// {title:'why mas & cheese rules',
// likes:30}, 
// {title:'10 things to make with marmite', 
// likes:50}
// ];

//console.log(blogs);

let user = {
  //defining properties
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: [
    {title:'why mas & cheese rules', likes:30},
    {title:'10 things to make with marmite', likes:50}
  ],
  //defining methods
  login(){
    console.log('the user logged in');
  }, 
  logout(){
    console.log('the user logged out')
  } ,
  logBlogs(){
    //console.log(this.blogs);
    console.log('this user has written the following blogs:')
    this.blogs.forEach((blog) =>{
      console.log(blog.title, blog.likes);
    })
  }
};

console.log(user.name);
user.age=35;


user['age'] = 45;
console.log(user.age);
console.log(typeof(user));

user.login();
user.logout();
user.logBlogs();