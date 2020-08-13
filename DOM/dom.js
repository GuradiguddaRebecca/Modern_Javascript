const para = document.querySelector('body > h1');

console.log(para);

const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');
console.log(errors);

//get an element by Id
const title  = document.getElementById('page-title');
console.log(title);

//get element by class name
const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);

//get element by their tagname
const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);

//change text and html inside elements
const para = document.querySelector('p');

console.log(para.innerText); //it is a property

para.innerText="it is changed";

const paras = document.querySelectorAll('p');

paras.forEach(para =>{
    console.log(para.innerText);
    paras.innerText += "new text";
});

const content = document.querySelector('.content');
console.log(content.innerHTML);

content.innerHTML += `<h2>THIS IS A NEW H2</h2>`;

const people = ['mario', 'kuxisi' , 'colede'];

people.forEach(person =>{
    content.innerHTML += `<p>${person}</p>`
});

const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.facebook.com');
link.innerText = "The Facebook website";

const messg = document.querySelector('p');

console.log(messg.getAttribute('class'));
messg.setAttribute('class','success');
messg.setAttribute('style','color:green;');


const title = document.querySelector('h1');
// title.setAttribute('style', 'margin:50px;');
console.log(title.style);

title.style.margin = "60px";