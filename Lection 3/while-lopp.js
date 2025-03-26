
   let textInput=prompt('Write just a number')

   while (textInput!='') {
       textInput = prompt('Write a number again');
   
       if ( !isNaN(textInput)&& textInput!== "") {
           console.log('This is a number,welcome!:' + textInput);
           break; 
       } 
    
       else {
           alert('The number you entered is incorrect,try again.');
       }
   }
   