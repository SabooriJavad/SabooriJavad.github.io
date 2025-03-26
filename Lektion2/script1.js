function myFunctionResult(){
    return ('demo')
}

const heading= document.querySelector('h1'); 
const kalasher= document.getElementById('title');
const saveButton=document.getElementById('save');

 saveButton.addEventListener('click',() => {
heading.textContent= kalasher.value;
});

function myFunction(){
    let text = document.getElementById('demo').innerHTML;
    document.getElementById('demo').innerHTML=text.toUpperCase();
}
let text ="Winter in Sweden is cold" ;
let length = text.length;


