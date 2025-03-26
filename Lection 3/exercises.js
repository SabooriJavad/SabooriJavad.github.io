

 const textInput=document.getElementById('text-input');
const submitButton=document.getElementById('submitButton');
const resultOutput=document.getElementById('result');

submitButton.addEventListener('click',() =>{

const writeInput = textInput.value.trim();

result.classList.remove('green','red','blue');

 if( writeInput === ''){
 result.textContent='You should write something first' 
 result.classList.add('blue');
    

} else if (!isNaN(writeInput) ){
    result.textContent='This is a valid number '
    result.classList.add('green');
}
 else   {
    result.textContent='This is not a number,Please try again'
    result.classList.add('red');
} 
})  
