let input = document.getElementById('input');
let output = document.getElementById('output');
let check = document.getElementById('check');
const data = [];

check.addEventListener('click', function(){
  
  let textField = input.value;
  let message = undefined;

   for (let i = 0; i < textField.length; i++){
       if(textField[i] === "(" ){ 
            data.push( "(" );
       } else if(textField[i] === ")" && data.length > 0){
            data.pop("(");
       } else if(textField[i] === ")" && data.length == 0 ){
          message = "um ) ou mais";
     }
   } console.log(data);

   if(message){
     output.innerHTML = message;
   } else {
        output.innerHTML = data.length + '<br>' + data;
   }

     while(data.length > 0) {
          data.pop();
      };

     return data;
})

