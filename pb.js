let input = document.getElementById('input');
let output = document.getElementById('output');
let check = document.getElementById('check');
const data = [input.value];

check.addEventListener('click', function(){
  
  let textField = input.value;

   for (let i = 0; i < textField.length; i++){
       if(textField[i] === "(" ){ 
            data.push( "(" );
       } else if(textField[i] === ")" ){
            data.pop("(");
       } else if(data.length = 0 ){
          console.log("contou fechamento a mais");
     }
   } console.log(data);

     output.innerHTML = data.length + '<br>' + data;

     while(data.length > 0) {
          data.pop();
      };

     return data;
})

