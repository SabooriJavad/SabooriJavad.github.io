
 const numberInput =document.getElementById('number-input');
const submitButton=document.getElementById('submit');
const resultList=document.getElementById('result');

submitButton.addEventListener('click',() => {
    const numberOflistItems= Number(numberInput.value);

      resultList.innerHTML='';

    for(let i=0; i< 10;i++){
      
        const listItems=document.createElement('li')
         listItems.textContent=''+(i+1);
         resultList.appendChild(listItems)
        
    }
});
 for(let i=1; i<=20; i++){
  if (i %2 ===0){
   console.log(i)
  }
 }
  



