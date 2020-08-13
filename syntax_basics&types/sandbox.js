//declaring variables with let keyword
//There can't be space between variable name
//Cant start with number
//we cant use reserved keyword as variable name
//variable names can be declared by camelcase method
//comments can used for understanding
let age = 25;
let a = 2020;
//log out the value in console
console.log(age,a);
//replace the value of age 
//You can change the value of existing variable without let keyword
age = 30;
console.log(age);

//when you dont want to change the valus of variable, you need to declare it with const variable
const points= 100;

//if you replace it ,you will get an error
// points = 50;
console.log(points);

//older way to declare variables
var score = 75;
console.log(score);

//---STRINGS
console.log('hello, world');

let email = 'guradi.rebecca@gmail.com';
console.log(email);

//string concatenation
let fname = 'rebecca';
let lname = 'solomon';

let fullName = fname +' '+ lname;
console.log(fullName);

//getting characters
console.log(fullName[0]);

//string length
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

//common string methods
let gmail = 'guradi.rebecca@gmail.com';

let final = gmail.lastIndexOf('c');
let final = gmail.slice(0,10);
let final = gmail.substr(4,10);
let final = gmail.replace('c','w');
let final = gmail.replace('r','w');

console.log(final);

//----NUMBERS
let radius = 10;
const pi = 3.14;
console.log(radius,pi);

//math opeeators + - * / ** %
console.log(10/2);
let results = radius%3;
let results = pi*radius**2;

//order of operations - B I D M A S

let results = 5 * (10-3)**2;
console.log(results);


//--INCREMENTS
let likes = 10;

let likes = likes+1;
likes++;
likes--;
likes += 10;
likes -= 5;
likes *=2;
like /=2;


console .log(likes); 

//--NAN

console.log(5 / 'hello');
console.log(5 * 'hello');


//--CONCAT STRINGS
let concat = 'the blog has' + likes + 'likes';
console.log(concat);

const title = 'Best socialmedia of 2020';
const author = 'Mario';
const likess = 300;

//concatentaion way
let resultss = 'The blog called' + title + 'by' + author + 'has' +likes + 'likess';

//template string way
let resultss = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(resultss);

//creating html templates
let html = `
  <h2>${title}</h2>
  <p>${author}</p2>
  <span>This blog has ${likes} likes</span>
`;

console.log(html);

//--ARRAYS
//starts with 0
let fruits = ['apple', 'banana', 'cherry'];
fruits[1] = 'strawberry';
console.log(fruits);
console.log(fruits[1]);

let ages = [20,25,60,40];
console.log(ages[3]);

let random = ['shaun', 'crystal' , 100 , 20];
console.log(random);

console.log(fruits.length);

//---ARRAY METHODS

let output = fruits.join('-');
let output = fruits.indexOf('cherry');
let output = fruits.concat(['ken','rebecca']);

let output = fruits.push('ken');
output = fruits.pop();
console.log(fruits);


