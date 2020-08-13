//--function declaration
function greet(){
    console.log('hello there');
}

//--function expression
const speak = function(){
    console.log('good day')
};
//hoisting works with function declaration
greet();
speak();

//--arguments and parameters
//order of parameters matter
const talk = function(name, time){//parameter
    console.log(`good ${time} ${name}`);
}
talk('rebecca', 'morning');//argument

//--default values
const hey = function(name='rebecca', time='evening'){//parameter
    console.log(`good ${time} ${name}`);
}
hey();//argument
hey('mary');

// -----------------------
//--returning values
const calcArea = function(radius){
    // let area = 3.14 * radius**2;
    // return area;

    return 3.14 * radius**2;
};
const result = calcArea(2);
console.log(result);

//--arrow functions
//no need to write function keyword
const Area = (radius) =>{
    return 3.14 * radius**2;
};
//another way
const Area = radius => 3.14 * radius**2;

const value = Area(2);
console.log(value);

//example 1
const greeting = () => 'hello,world';
const re = greeting();
console.log(re)


//example 2
const bill = (products, tax) => {
    let total = 0;
    for(let i=0; i<products.length; i++){
        total +=products[i]+products[i] * tax;
    }
    return total;
};

console.log(bill([10,15,20],0.2));


const name = 'rebecca';


// //--functions
const greeting = () => 'hello';
let resultOne = greeting();
console.log(resultOne);

// //--methods

let result2 = name.toUpperCase();
console.log(result2);

//--callbacks and foreach
const myFunc = (callbackFunc) =>{
    //do something
    let value = 50;
    callbackFunc(value);
};

myFunc(function(value){
    //do something
    console.log(value);
});

let people = ['rebecca', 'solomon', 'carol', 'christy', 'ronaldo' ];
people.forEach(function(person){
    console.log(person);
})