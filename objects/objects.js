//object literals

let user = {
    name:'rebecca',
    age:23,
    email:'guradi.rebecca@gmail.com',
    location:'hyderabad',
    blogs:[
        { title: 'journey from scratch to developer', likes:30},
    { title: 'Why javascript', likes:50}
    ],
    login:function(){
        console.log('the user logged in');
    },
    logout:function(){
        console.log('the user logged out');
    },
    logBlogs:function(){
        // console.log(this.blogs);//this is an context object
        console.log('this user has written the following blogs');
        this.blogs.forEach(blog => {
            console.log(blog.title,blog.likes);
        });
    }
};

user.login();
user.logout();
user.logBlogs();

const name = 'mario';
name.toUpperCase();



console.log(user);
console.log(user.name);

// user.age = 21;
console.log(user.age);e.log(user);
console.log(user.name);



console.log(user['name']);
user['name'] = 'solomon';
console.log(user['name']);

console.log(typeof user);

//MATY OBJECT

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random numbers

const random = Math.random();
console.log(random);
console.log(Math.round(random*100));

//primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`); //template string

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`); //template string
//reference values

const userOne = {name: 'ryu', age:30};
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.name= 'rebecca';
console.log(userOne, userTwo);