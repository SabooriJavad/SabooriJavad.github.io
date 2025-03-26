
const myUltextInput=document.getElementById('myUL');
const onclickButton=document.getElementById('onclick');
const resultOutput=document.getElementById('result');
 

onclickButton.addEventListener('click', () => {
resultOutput.textContent=myUltextInput.value;
 
});  

function myFunction2() {
    const Submit= document.getElementById("myList");
     Submit.querySelector(".myList").innerHTML = "";
   }
function myFunction1() {
   const Button= document.getElementById("hide");
    Button.querySelector(".hide").innerHTML = "";
  }
  function myFunction (){
    document.open();
   
} 
