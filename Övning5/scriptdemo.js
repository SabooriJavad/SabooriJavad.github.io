const textInput=document.getElementById('text-input');
const submitButton=document.getElementById('submit')
const resultOutput=document.getElementById('result')


 submitButton.addEventListener('click',()=>{
    const inputValue=textInput.value;
    console.log(inputValue.length)
    const inputLength=inputValue.length 


    if(inputLength >6){
        resultOutput.textContent='Texten är längre än sex'
    }
   else if(inputLength <6)
    resultOutput.textContent='Texten är kortare än sex'

   else{
    resultOutput.textContent='Texten är exakt sex tecken lång!'
       }
})