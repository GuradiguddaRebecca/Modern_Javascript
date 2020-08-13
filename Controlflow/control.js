//---for loops
//initialization;condition;final expression
//1
for(let i = 0; i < 5; i++){
    console.log('in loop',i);
}
console.log('loop finished');

//2
const names = ['rebecca', 'honey', 'cupcake'];
for(let i=0; i<names.length; i++){
    // console.log(names[i]);
    //in html format
    let html = `<div>${names[i]}</div>`
    console.log(html);
}

//--while loop
//we initialize i at the first
//there will be only condition 
//1
let i=0; 

while(i < 5){
    console.log('in loop',i);
    i++;
}

//2
let i=0;
while(i<fruits.length){
    console.log(fruits[i]);
    i++;
}

//do while loop
//even if the condition is false we want to run the statement once
//1
let i=5;

do{
    console.log('val of i is: ',i);
    i++;
}while(i<5);

//if statements
//1
const age = 20;

if(age >= 20){
    console.log('You are over 20 yeras old');
}

//2
const veggies = ['chiily', 'tomato', 'potato', 'mango'];
if(veggies.length>3){
    console.log("that is a lot of veggies");
}

//3
const password = 'password';

if(password.length>=12){
    console.log('That password is might strong');
}else if(password.length >= 8){
    console.log('that password is long enough ');
}else{
    console.log('The password is not long enough');
}

//logical operators
//and or

const password = 'p@ss12';

if(password.length>=12 && password.includes('@')){
    console.log('That password is might strong');
}else if(password.length >= 8 || password.includes('@') && password.length >= 5){
    console.log('that password is long enough ');
}else{
    console.log('The password is not long enough');
}


//logical not(!)

let user = false;

if(!user){
    console.log('you must be logged in ');
}
console.log(!true);
console.log(!false);

//break and continue
const scores =[50,20,30,40,100,74,20,51];

for(let i=0;i<scores.length;i++){

    if(scores[i] ===30){
        continue;
    }

    console.log('your score:', scores[i]);
    if(scores[i] ===100){
        console.log('congrates');
        break;
    }
}