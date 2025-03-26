


let x1='Hello world'
x1= x1.split('');
x1.reverse();
console.log(x1);
document.write(x1)


function sum(...glad){
  let sum=0;
  for(let kul of glad) sum +=kul;
  return sum;
}
let x=sum(23,34,56,78,97,65,4,7,)
document.getElementById('demo'). innerHTML= ('The sum is:') + x;
document.getElementById("demo 1").innerHTML= Math.max(34,56);
 


let text = "Winter in Sweden is cold";
let length = text.length;
document.getElementById("demo 2").innerHTML = length;

function myFunction(){
  document.getElementById("myHl").style.color = "#ff0000";
document.getElementById("myH2").style.color = "magenta";
document.getElementById("myH3").style.color = "blue";
document.getElementById("myP").style.color = "lightblue";
document.getElementById("myP2").style.color = "lightgreen";

}


function myFunctionResult(){
  return ('demo')
}

const heading= document.querySelector('h1');
const kalasher= document.getElementById('title');
const saveButton=document.getElementById('save');

saveButton.addEventListener('click',() => {
heading.textContent= kalasher.value;
});

